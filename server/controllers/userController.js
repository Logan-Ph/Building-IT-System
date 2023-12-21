const User = require('../models/user')
const Vendor = require('../models/vendor')
const Shipper = require('../models/shipper')
const Product = require('../models/product')
const Cart = require('../models/cart')
const Order = require('../models/order')
const Comment = require('../models/comment')
const HomepageBanner = require('../models/homepage-banner')
const Thread = require('../models/thread')
const Message = require('../models/message')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')
const mongoose = require('mongoose')
const Mailgen = require('mailgen')
const nodemailer = require('nodemailer')
const algoliasearch = require('algoliasearch')
const ImageKit = require("imagekit")
// Connect and authenticate with your Algolia app
const client = algoliasearch('IZX7MYSNRD', '37f3c21ce9ab70964e1d85cd542e61b8')
const index = client.initIndex('rBuy_test')
const { OpenAI } = require('openai')
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const imagekit = new ImageKit({
  publicKey: "public_/qnMdn3Z1wjuZZM9H8sVN6bwzIQ=",
  privateKey: "private_cbWm9zohUJFQN1mBMEOxC6ZNjrY=",
  urlEndpoint: "https://ik.imagekit.io/cnhlinh"
});

const fs = require("fs");
const { error } = require('console')
require('dotenv').config()

function convertUser(user) {
  if (!user) return null;
  const userJson = user.toJSON();
  if (user.img && user.img.data) {
    userJson.img = Buffer.from(user.img.data).toString("base64");
  }
  return userJson;
}

function sendEmailVerification(userEmail) {
  try {
    let config = {
      service: 'gmail',
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASS
      }
    }

    let transporter = nodemailer.createTransport(config);

    let mailgenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Mailgen",
        link: "https://mailgen.js"
      }
    })
    const userToken = jwt.sign({ user: userEmail }, process.env.VERIFY_EMAIL, { expiresIn: '10m' });
    const url = `http://localhost:3000/user/${userToken}/verify-email`;

    let response = {
      body: {
        intro: "Email verification",
        outro: `Please lick on this link to verify your email ${url}, This link will be expired in 10 minutes`,
      }
    }

    let mail = mailgenerator.generate(response);

    let message = {
      from: "rBuy@gmail.com",
      to: userEmail,
      subject: "Forgot password verification",
      html: mail
    }
    transporter.sendMail(message)
  }
  catch {
    console.log("error when send Email")
  }
}

exports.loginSuccess = async (req, res) => {
  if (req.user) {
    const user = convertUser((await User.findById(req.user._id)) || (await Vendor.findById(req.user._id)) || (await Shipper.findById(req.user._id)));
    const cart = await Cart.findOne({ userID: req.user._id })
    res.status(200).json({ user: user, cart: (cart) ? cart : null });
  } else {
    res.status(500).json({ user: "", cart: null })
  }
}

exports.homePage = async (req, res) => {
  try {
    let product = await Product.find({}).limit(32);
    return res.json({ product: product });
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.slider = async (req, res) => {
  try {
    const banner = await HomepageBanner.findOne({ title: 'Banner' })
    const carouselImage = banner.img;
    console.log(carouselImage);
    return res.json({ images: carouselImage });
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.chatbotMessage = async (req, res) => {
  let threadId = req.cookies.threadId;
  if (!threadId) {
    const thread = await openai.beta.threads.create();
    threadId = thread.id;
    res.cookie("threadId", threadId, { httpOnly: true }); // pass thread id into the cookies
  }
  let messages;
  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: req.body.message
  });
  const run = await openai.beta.threads.runs.create(threadId, { assistant_id: process.env.ASSISTANT_ID });
  while (true) {
    const runRetreive = await openai.beta.threads.runs.retrieve(threadId, run.id);
    if (runRetreive.status === "completed") {
      messages = await openai.beta.threads.messages.list(threadId);
      break;
    }
  }
  return res.json({ message: messages.data[0].content[0].text.value });
}

exports.productPage = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    let vendorName = await Vendor.findById(product.owner, { businessName: 1 })
    res.json({ product: product, vendorName: vendorName.businessName });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.registerpage = (req, res) => {
  try {
    res.render('register', { title: 'rBUY - Register' });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.userRegister = async (req, res) => {
  const bcrypt = require('bcrypt');
  try {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const checkEmail =
      (await User.findOne({ email: email })) ||
      (await Vendor.findOne({ email: email })) ||
      (await Shipper.findOne({ email: email }));

    const checkPhone =
      (await User.findOne({ phoneNumber: phoneNumber })) ||
      (await Vendor.findOne({ phoneNumber: phoneNumber }));

    if (checkEmail) {
      return res.status(500).json("Email already exists.")
    } else if (checkPhone) {
      return res.status(500).json("Phone number already exists.")
    } else {
      const newUser = new User({
        email: email,
        password: hashedPassword,
        name: req.body.name,
        address: req.body.address,
        phoneNumber: phoneNumber,
      });
      await newUser.save();
      if (!emailRegex.test(email)) {
        throw new Error("Invalid email address");
      }
      sendEmailVerification(email)
      return res.json("Thank you for registering! A verification email has been sent to your email address. Please check your inbox and follow the instructions to verify your account. If you don't see the email, please check your spam folder.");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.vendorRegister = async (req, res) => {
  const bcrypt = require('bcrypt');
  try {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const businessName = req.body.businessName;

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const checkEmail =
      (await User.findOne({ email: email })) ||
      (await Vendor.findOne({ email: email })) ||
      (await Shipper.findOne({ email: email }));

    const checkPhone =
      (await User.findOne({ phoneNumber: phoneNumber })) ||
      (await Vendor.findOne({ phoneNumber: phoneNumber })) ||
      (await Shipper.findOne({ phoneNumber: phoneNumber }));

    const checkBusinessName = (await Vendor.findOne({ businessName: businessName }));

    if (checkEmail) {
      return res.status(500).json("Email already exists.");
    } else if (checkPhone) {
      return res.status(500).json("Phone number already exists.")
    } else if (checkBusinessName) {
      return res.status(500).json("Business name already exists.")
    } else {
      const newVendor = new Vendor({
        email: email,
        password: hashedPassword,
        businessName: businessName,
        address: req.body.address,
        phoneNumber: phoneNumber,
      });
      await newVendor.save();
      if (!emailRegex.test(email)) {
        throw new Error("Invalid email address");
      }
      sendEmailVerification(email)
      return res.json("Thank you for registering! A verification email has been sent to your email address. Please check your inbox and follow the instructions to verify your account. If you don't see the email, please check your spam folder.");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.shipperRegister = async (req, res) => {
  const bcrypt = require('bcrypt');
  try {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const distributionHub = req.body.distributionHub

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const checkEmail =
      (await User.findOne({ email: email })) ||
      (await Vendor.findOne({ email: email })) ||
      (await Vendor.findOne({ email: email }));


    const checkPhone =
      (await User.findOne({ phoneNumber: phoneNumber })) ||
      (await Vendor.findOne({ phoneNumber: phoneNumber })) ||
      (await Shipper.findOne({ phoneNumber: phoneNumber }));

    if (checkEmail) {
      return res.status(500).json("Email already exists.")
    } else if (checkPhone) {
      return res.status(500).json("Phone number already exists.")
    } else {
      const newShipper = new Shipper({
        email: email,
        password: hashedPassword,
        name: req.body.name,
        address: req.body.address,
        phoneNumber: phoneNumber,
        distributionHub: distributionHub,
      });
      await newShipper.save();
      if (!emailRegex.test(email)) {
        throw new Error("Invalid email address");
      }
      sendEmailVerification(email)
      return res.json("Thank you for registering! A verification email has been sent to your email address. Please check your inbox and follow the instructions to verify your account. If you don't see the email, please check your spam folder.");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.forgotPassword = async (req, res) => {
  let userEmail = req.body.email

  let config = {
    service: 'gmail',
    auth: {
      user: process.env.GOOGLE_USER,
      pass: process.env.GOOGLE_PASS
    }
  }

  let transporter = nodemailer.createTransport(config);

  let mailgenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Mailgen",
      link: "https://mailgen.js"
    }
  })

  const userToken = jwt.sign({ user: userEmail }, process.env.RESETPWD, { expiresIn: '10m' });
  const url = `http://localhost:3000/user/${userToken}/forgot-password`;

  let response = {
    body: {
      intro: "Forgot password verification link",
      outro: `Please lick on this link to reset your password ${url}, This link will be expired in 10 minutes`,
    }
  }

  let mail = mailgenerator.generate(response);

  let message = {
    from: "rBuy@gmail.com",
    to: userEmail,
    subject: "Forgot password verification",
    html: mail
  }

  transporter.sendMail(message).then(() => {
    return res.status(201).json({ msg: "Email sent" })
  }).catch(er => {
    return res.status(500).json({ er: er })
  })
}

exports.loginPage = (req, res) => {
  try {
    res.json("This is login Page");
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.resetPassword = (req, res) => {
  jwt.verify(req.params.token, process.env.RESETPWD, (err, user) => {
    if (err) return res.json()
    res.json({ userEmail: user })
  })
}

exports.postResetPassword = async (req, res) => {
  const { userEmail, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.findOneAndUpdate({ email: userEmail }, { password: hashedPassword, verify: true });
  return res.json({ msg: "Password updated successfully. You will be directed to login page in 5 seconds" });
}

exports.verifyEmail = async (req, res) => {
  jwt.verify(req.params.token, process.env.VERIFY_EMAIL, async (err, user) => {
    if (err) return res.status(500).json("error");
    const foundUser = (await User.findOneAndUpdate({ email: user.user }, { verify: true })) || (await Vendor.findOneAndUpdate({ email: user.user }, { verify: true })) || (await Shipper.findOneAndUpdate({ email: user.user }, { verify: true }))
    if (!foundUser) return res.status.json("error");
    return res.status(200).json("success")
  })
}

// Place the Order
exports.placeOrder = async (req, res) => {
  try {
    const userID = req.user._id;
    if (req.body.isRemember) {
      await User.findByIdAndUpdate(userID, { city: req.body.checkoutInfo.city, phoneNumber: req.body.checkoutInfo.phoneNumber, district: req.body.checkoutInfo.district, ward: req.body.checkoutInfo.ward, streetAddress: req.body.checkoutInfo.streetAddress })
    }
    const products = req.body.products

    // Find the user's cart
    const userCart = await Cart.findOne({ userID }).populate('products.product');
    if (!userCart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    // Group products by owner
    const productsByOwner = userCart.products.reduce((groups, cartItem) => {
      const ownerID = cartItem.product.owner.toString();
      if (!groups[ownerID]) {
        groups[ownerID] = [];
      }
      groups[ownerID].push(cartItem);
      return groups;
    }, {});

    // Create an order for each owner
    for (const ownerID in productsByOwner) {
      const order = new Order({
        userId: userID,
        vendorID: ownerID,
        products: productsByOwner[ownerID].map((cartItem) => ({
          productId: cartItem.product._id,
          quantity: cartItem.quantity,
          image_link: cartItem.product.image_link,
          price: cartItem.product.price,
          product_name: cartItem.product.product_name
        })),
        userName: req.user.name,
        shippingAddress: req.body.streetAddress,
        contactNumber: req.body.phoneNumber
      });

      await order.save();
    }

    for (const product of products) {
      await userCart.removeProduct(product.product); // Remove each product from the cart
    }

    res.status(200).json({ message: 'Orders placed successfully!', cart: userCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error placing order' });
  }
};

exports.addProduct = async (req, res) => {
  if (!req.user) {
    return res.status(500).json({ error: "Please log in or create an account to add items to your cart." })
  }
  const cart = await Cart.findOne({ userID: req.user._id })

  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({ error: "Cannot find the product." })
  }

  if (!cart) {
    const newCart = new Cart({
      userID: new mongoose.Types.ObjectId(req.user._id),
      products: [{
        product: product._id,
        quantity: (req.query.quantity) ? req.query.quantity : 1,
        owner: new mongoose.Types.ObjectId(product.owner),
        image_link: product.image_link,
        price: product.price,
        product_name: product.product_name,
      }]
    })
    await newCart.save()
  } else {
    await cart.addProduct(
      await Product.findById(req.params.id),
      (req.query.quantity) ? req.query.quantity : 1
    );
  }
  return res.status(200).json({ msg: "added to cart", cart: (cart) ? cart : null })
}

exports.removeProduct = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userID: req.user._id })
    const product = await Product.findById(req.params.id);
    cart.removeProduct(product._id);
    return res.status(200).json({ cart: cart })
  }
  catch {
    return res.status(500).json({ error: "Cannot find the product." })
  }
}

exports.manageOrder = async (req, res) => {
  try {
    const orders = await Order.find({ vendorID: req.user._id })
    return res.status(200).json((orders) ? { orders: orders } : { orders: "" });
  } catch {
    return res.status(500).json({ error: "Cannot find order. " })
  }
}

exports.vendorHomepage = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    let vendorImage, coverPhoto, bigBanner, smallBanner1, smallBanner2;
    if (vendor.img.data) {
      vendorImage = Buffer.from(
        vendor.img.data
      ).toString("base64");
    }
    if (vendor.coverPhoto.data) {
      coverPhoto = Buffer.from(
        vendor.coverPhoto.data
      ).toString("base64");
    }
    if (vendor.bigBanner.data) {
      bigBanner = Buffer.from(
        vendor.bigBanner.data
      ).toString("base64");
    }
    if (vendor.smallBanner1.data) {
      smallBanner1 = Buffer.from(
        vendor.smallBanner1.data
      ).toString("base64");
    }
    if (vendor.smallBanner2.data) {
      smallBanner2 = Buffer.from(
        vendor.smallBanner2.data
      ).toString("base64");
    }
    return res.status(200).json({ vendor: vendor, vendorImage: vendorImage, coverPhoto: coverPhoto, bigBanner: bigBanner, smallBanner1: smallBanner1, smallBanner2: smallBanner2 });
  } catch {
    return res.status(500).json({ error: "Vendor not found" })
  }
}

exports.vendorProductPage = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    let vendorImage;
    if (vendor.img.data) {
      vendorImage = Buffer.from(
        vendor.img.data
      ).toString("base64");
    }
    return res.status(200).json({ vendor: vendor, vendorImage: vendorImage });
  } catch {
    return res.status(500).json({ error: "Vendor not found" })
  }
}

exports.confirmOrder = async (req, res) => {
  const orderId = req.body.orderId;
  await Order.findByIdAndUpdate(orderId, { status: "To Ship" });
  return res.status(200).json({ msg: "Order confirmed" });

}

exports.getVendorDashboard = async (req, res) => {
  try {
    const orders = await Order.aggregate([
      {
        $match: { vendorID: new mongoose.Types.ObjectId(req.user._id) }
      },
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);

    const ordersCountByStatus = {};
    orders.forEach(orderGroup => {
      ordersCountByStatus[orderGroup._id] = orderGroup.count;
    });
    res.status(200).json({ ordersByStatus: ordersCountByStatus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.postVendorDashboard = async (req, res) => {

}

exports.cartPage = async (req, res) => {
  try {
    const cart = await Cart.find({ userID: req.user._id })
    const products = cart[0].products
    return res.status(200).json({ products: products })
  } catch {
    return res.status(500).json({ error: "Cannot find cart" })
  }
}

exports.checkout = async (req, res) => {
  const checkoutInfo = {
    phoneNumber: req.user.phoneNumber,
    city: req.user.city,
    district: req.user.district,
    ward: req.user.ward,
    streetAddress: req.user.streetAddress,
  }
  return res.status(200).json({ checkoutInfo: checkoutInfo })
}

exports.logout = (req, res) => {
  req.session.destroy();
  res.clearCookie('accessToken');
  return res.json('Logged out successfully');
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (req.file) {
      const image = {
        data: fs.readFileSync("uploads/" + req.file.filename),
      };
      user.img = image;
    }
    if (req.body.name) {
      user.name = req.body.name
    }
    if (req.body.address) {
      user.address = req.body.address
    }
    if (req.body.phoneNumber) {
      const phoneNumber = req.body.phoneNumber;
      const checkPhone =
        (await User.findOne({ phoneNumber: phoneNumber })) ||
        (await Vendor.findOne({ phoneNumber: phoneNumber })) ||
        (await Shipper.findOne({ phoneNumber: phoneNumber }));
      if (checkPhone) {
        return res.status(500).json("Phone number already exists.")
      } else {
        user.phoneNumber = phoneNumber;
      }
    }
    await user.save();
    return res.json('Profile has been updated!')
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.updateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.user._id);
    if (req.file) {
      const image = {
        data: fs.readFileSync("uploads/" + req.file.filename),
      };
      vendor.img = image;
    }

    if (req.body.address) { vendor.address = req.body.address; }
    if (req.body.businessName) {
      const checkBusinessName = (await Vendor.findOne({ businessName: req.body.businessName }));
      if (checkBusinessName(req.body.businessName)) {
        return res.status(500).json("Business name has already existed.")
      } else {
        vendor.businessName = req.body.businessName;
      }
    }
    if (req.body.phoneNumber) {
      const phoneNumber = req.body.phoneNumber;
      const checkPhone =
        (await User.findOne({ phoneNumber: phoneNumber })) ||
        (await Vendor.findOne({ phoneNumber: phoneNumber })) ||
        (await Shipper.findOne({ phoneNumber: phoneNumber }));
      if (checkPhone) {
        return res.json("Phone number has already existed.");
      } else { vendor.phoneNumber = req.body.phoneNumber; }
    }
    await vendor.save();
    return res.json('Profile has been updated!')
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.updateShipper = async (req, res) => {
  try {
    const shipper = await Shipper.findOne({ email: req.body.email });
    if (req.file) {
      const image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
      shipper.img = image;
    }
    if (req.body.name) {
      shipper.name = req.body.name;
    }
    if (req.body.address) {
      shipper.address = req.body.address;
    }
    if (req.body.phoneNumber) {
      const phoneNumber = req.body.phoneNumber;
      const checkPhone =
        (await User.findOne({ phoneNumber: phoneNumber })) ||
        (await Vendor.findOne({ phoneNumber: phoneNumber })) ||
        (await Shipper.findOne({ phoneNumber: phoneNumber }));
      if (checkPhone) {
        shipper.phoneNumber = req.body.phoneNumber;
      }
    }
    await shipper.save();
    return res.json('Profile has been updated!')
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.banUser = async (req, res) => {
  const userId = req.body.userId;
  if (req.body.remove) {
    await User.findByIdAndDelete(userId);
    return res.status(200).json({ msg: "Remove user successfully" });
  }
  const startDate = (req.body.startDate).split('T')[0];
  const endDate = (req.body.endDate).split('T')[0];

  try {
    const user = await User.findById(userId);
    const vendor = await Vendor.findById(userId);
    const shipper = await Shipper.findById(userId);

    if (user) {
      await User.updateOne({ _id: userId }, { banEndDate: endDate, banStartDate: startDate });
    } else if (vendor) {
      await Vendor.updateOne({ _id: userId }, { banEndDate: endDate, banStartDate: startDate });
    } else if (shipper) {
      await Shipper.updateOne({ _id: userId }, { banEndDate: endDate, banStartDate: startDate });
    } else {
      throw new Error('User does not exist!');
    }

    return res.status(200).json({ msg: "Banned user successfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

exports.userProfile = async (req, res) => {
  return res.status(200).json("profile page");
}

exports.editStore = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.user._id);
    if (req.files) {
      if (req.files.coverPhoto) {
        vendor.coverPhoto.data = fs.readFileSync(req.files.coverPhoto[0].path);
      }

      if (req.files.bigBanner) {
        vendor.bigBanner.data = fs.readFileSync(req.files.bigBanner[0].path);
      }

      if (req.files.smallBanner1 && req.files.smallBanner2) {
        const smallBanner1Buffer = fs.readFileSync(req.files.smallBanner1[0].path);
        vendor.smallBanner1.data = smallBanner1Buffer;
        const smallBanner2Buffer = fs.readFileSync(req.files.smallBanner2[0].path);
        vendor.smallBanner2.data = smallBanner2Buffer;
      }

      if ((req.files.smallBanner1 && !req.files.smallBanner2) || (!req.files.smallBanner1 && req.files.smallBanner2)) {
        return res.json("Must include 2 images file for 2 small banner.")
      }

    }
    await vendor.save();
    return res.json('Storefront has been updated!')
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.addNewProduct = async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId();
    const uploadImage = async () => {
      try {
        if (req.file) {
          const response = await imagekit.upload({
            file: fs.readFileSync("uploads/" + req.file.filename),
            fileName: id + ".jpg",
          });
          return response.url;
        } else {
          return null;
        }
      } catch (err) {
        console.log("Error uploading image:", err);
        return null;
      }
    };

    const imageURL = await uploadImage();

    const newProduct = new Product({
      _id: id,
      owner: req.user._id,
      product_name: req.body.productName,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock,
      image_link: imageURL,
      no_of_ratings: 0,
      ratings: 0.0,
    });

    await newProduct.save()
      .then(() => { })
      .catch(err => console.log(err));

    const object = {
      objectID: id,
      product_name: req.body.productName,
      category: req.body.category,
      owner: req.user.businessName,
      price: parseInt(req.body.price, 10),
      description: req.body.description,
      stock: req.body.stock,
      image_link: imageURL,
      no_of_ratings: 0,
      ratings: 0.0,
    };

    index.saveObject(object).wait()
      .then(() => { })
      .catch(err => console.log(err));
    return res.json("Product has been uploaded.")
  } catch (error) {
    res.status(500).json({ message: error.message || "Error Occured" });
  }
};

// Function to delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const productToDelete = await Product.findById(productID);
    if (!productToDelete) {
      return res.status(404).json('Product not found');
    }
    await Product.findByIdAndDelete(productID);
    console.log(productID);
    index.deleteObject(productID)
      .then(() => { })
      .catch(err => res.json(err));
    return res.status(200).json('Product deleted successfully');
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const productToUpdate = await Product.findById(productID);

    let object = { objectID: productID };
    if (req.file) {
      const image = {
        data: fs.readFileSync("uploads/" + req.file.filename),
      };
      productToUpdate.img = image;

      const uploadImage = async () => {
        try {
          const response = await imagekit.upload({
            file: fs.readFileSync("uploads/" + req.file.filename),
            fileName: productID + ".jpg",
          });
          console.log(response.url);
          return response.url;
        } catch (err) {
          console.log("Error uploading image:", err);
          return null;
        }
      };
      const imageURL = await uploadImage();
      index.partialUpdateObject({
        image_link: imageURL,
        objectID: productID
      }).then(({ objectID }) => {
        console.log(objectID);
      });
    }
    if (req.body.productName) {
      productToUpdate.product_name = req.body.productName;
      object.product_name = req.body.productName;
    }
    if (req.body.price) {
      productToUpdate.price = req.body.price;
      object.price = parseInt(req.body.price, 10);
    }
    if (req.body.category) {
      productToUpdate.category = req.body.category;
      object.category = req.body.category;
    }
    if (req.body.description) {
      productToUpdate.description = req.body.description;
      object.description = req.body.description;
    }
    if (req.body.stock) {
      productToUpdate.stock = req.body.stock;
      object.stock = req.body.stock;
    }
    await productToUpdate.save();
    index.partialUpdateObject(object).then(() => { });
    return res.json('Product has been updated!')
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.manageProduct = async (req, res) => {
  try {
    const products = await Product.find({ owner: req.user._id })
    return res.status(200).json((products) ? { products: products } : { products: "" });
  } catch {
    return res.status(500).json({ error: "Cannot find products." })
  }
}

exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json({ product: product });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}


exports.manageUser = async (req, res) => {
  try {
    const users = (await User.find({})).filter(user => user.role !== "Admin").map(user => convertUser(user));
    const vendors = (await Vendor.find({})).map(vendor => convertUser(vendor));
    const shippers = (await Shipper.find({})).map(shipper => convertUser(shipper));
    return res.status(200).json({ users: users, vendors: vendors, shippers: shippers });
  } catch (error) {
    return res.status(500).json({ error: "Cannot find user. " })
  }
}

exports.reportPage = async (req, res) => {
  try {
    const user = convertUser(await User.findById(req.params.id));
    const vendor = convertUser(await Vendor.findById(req.params.id));
    // const shipper = (await Shipper.findById(req.params.id)).map(shipper => convertUser(shipper));

    if (user) {
      const orders = await Order.find({ userId: user._id })
      return res.status(200).json({ user: user, orders: orders });
    }

    if (vendor) {
      const orders = await Order.find({ vendorID: vendor._id })
      return res.status(200).json({ user: vendor, orders: orders });
    };

    // if (shipper) {
    //   let shipperImage;
    //   if (shipper.img.data) {
    //     shipperImage = Buffer.from(
    //       shipper.img.data
    //     ).toString("base64");
    //   }
    //   return res.status(200).json({ user: shipper, userImage: shipperImage });
    // }

    if (!user && !vendor) throw new Error("User not found");

    // if (!user && !vendor && !shipper) throw new Error("User not found");
  } catch (er) {
    console.log(er)
    return res.status(500).json({ error: er })
  }
}

exports.uploadHomepageCarousel = async (req, res) => {
  try {
    let banner = await HomepageBanner.findOne({ title: 'Banner' })
    if (!banner) {
      banner = new HomepageBanner({
        title: 'Banner',
      })
    }
    const uploadImage = async (file) => {
      try {
        const response = await imagekit.upload({
          file: fs.readFileSync("uploads/" + file.filename),
          fileName: file.filename + ".jpg",
        });
        return response.url;
      } catch (err) {
        console.log("Error uploading image:", err);
        return null;
      }
    };
    if (req.files) {
      const images = await Promise.all(req.files.map(async (file) => await uploadImage(file)));
      banner.img = images.filter(url => url !== null);
    }
    await banner.save();
    return res.status(200).json("Image uploaded.")
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error })
  }
}

exports.getThreads = async (req, res) => {
  try {
    const threads = await Thread.find({ $or: [{ userId: req.user._id }, { vendorId: req.user._id }] }).populate('content');
    let users = [];
    for (const thread of threads) {
      const user = convertUser((req.user.role === "User") ? await Vendor.findById(thread.vendorId, { businessName: 1, img: 1 }) : await User.findById(thread.userId, { name: 1, img: 1 }));
      users.push(user);
    }
    return res.status(200).json({ threads: threads, users: users });
  } catch (error) {
    return res.status(500).json({ error: error })
  }
}

exports.addMessage = async (req, res) => {
  try {
    const threadId = new mongoose.Types.ObjectId(req.params.id);

    const thread = await Thread.findById(threadId);
    if (!thread) return res.status(500).json({ error: "Thread not found" });

    const message = new Message({
      content: req.body.content,
      sender: (req.user.role === "User") ? "User" : "Vendor",
    })

    await message.save();
    thread.addMessage(message);
    return res.status(200).json({ message: message });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error })
  }
}

exports.createThread = async (req, res) => {
  try {
    const { _id: userId, role } = req.user;
    const otherUserId = role === "User" ? req.body.vendorId : req.body.userId;

    let thread = await Thread.findOne({ $or: [{ userId, vendorId: otherUserId }, { vendorId: userId, userId: otherUserId }] }).populate('content');

    if (!thread) {
      const newThreadData = role === "User" ? { userId, vendorId: otherUserId } : { userId: otherUserId, vendorId: userId };
      thread = await Thread.create(newThreadData);
    }

    return res.status(200).json({ thread: thread });
  } catch (error) {
    return res.status(500).json({ error: "You must login first!" });
  }
}

exports.getAdminDashboard = async (req, res) => {
  try {
    const numberOfUsers = await User.countDocuments();
    const numberOfVendors = await Vendor.countDocuments();
    const numberOfShippers = await Shipper.countDocuments();
    const numberOfProducts = await Product.countDocuments();
    return res.status(200).json({ numberOfUsers: numberOfUsers, numberOfVendors: numberOfVendors, numberOfShippers: numberOfShippers, numberOfProducts: numberOfProducts });
  } catch (error) { }
  return res.status(500).json({ error: error })
}


exports.viewComments = async (req,res) => {
  const id = req.params?.productId
  try {
      if (id) {
        const comments = await Comment.find({productId: id}).sort({postedOn:'asc'})
        res.json(comments);
      } else {
      res.status(500).json({message: 'Comments not found'})}

  } catch (error) {
    res.status(501).json({message: 'There was an error getting comments for this Product'});
  }}

exports.postComment = async (req,res) => {
 const product = await Product.findById(req.params.productId) ;
  if (!req.user) {
    return res.status(500).json({ error: "Please log in or create an account to comment" })
  }
  if (!product ){
    return res.status(500).json({ error: "This product does not exist" })
  }
  const id = req.params.productId
  const { commentText  } = req.body;
  try {
      const postComment = await Comment.create({
        productId:new mongoose.Types.ObjectId(id),
        commentText,
        postedBy: new mongoose.Types.ObjectId(req.user._id)})
       return res.status(200).json(postComment);  
  } catch (error) {
    res.status(500).json({message: error.message});
  }}

exports.replyComment = async (req,res) => {
    const comment_id = await Comment.findById(req.params.commentId) ;
    try {
        if (comment_id) {
          const reply = {
            commentId: comment_id,
            vendorId: req.body.vendorId,
            reply: req.body.reply
          }
         const newComment = await Comment.findByIdAndUpdate({ _id: comment_id}, {$push: {replyMessage : reply}}, {new: true})
          res.json(newComment);
        } else {
        res.status(500).json({message: 'Comments not found'})}

    } catch (error) {
      res.status(501).json({message: 'There was an error getting comments for this Product'});
    }}