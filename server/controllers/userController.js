const User = require('../models/user')
const Vendor = require('../models/vendor')
const Shipper = require('../models/shipper')
const Product = require('../models/product')
const Cart = require('../models/cart')
const Order = require('../models/order')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Mailgen = require('mailgen')
const nodemailer = require('nodemailer')

const fs = require("fs");
require('dotenv').config()

function sendEmailVerification(userEmail) {
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
  try {
    transporter.sendMail(message)
  }
  catch {
    console.log("error when send Email")
  }
}

exports.loginSuccess = async (req, res) => {
  if (req.user) {
    const user = (await User.findById(req.user._id)) || (await Vendor.findById(req.user._id)) || (await Shipper.findById(req.user._id));
    let userImage;
    if (user.img.data) {
      userImage = Buffer.from(
        user.img.data
      ).toString("base64");
    }
    const cart = await Cart.findOne({ userID: req.user._id })
    res.json({ user: user, length: (cart) ? cart.getTotalProducts() : 0, userImage: userImage });
  } else {
    res.json({ user: "", length: 0 })
  }
}

exports.homePage = async (req, res) => {
  try {
    let product = await Product.find({}).limit(32);
    return res.json({ product: product })
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
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
      });

      await order.save();
    }

    // Clear the user's cart
    await userCart.clearCart();

    res.status(200).json({ message: 'Orders placed successfully!' });
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
  return res.status(200).json({ msg: "added to cart", length: (cart) ? cart.getTotalProducts() : 0 })
}

exports.searchOrder = async (req, res) => {
  try {
    const orderId = req.body.orderId;
    const orderStatus = req.body.orderStatus
    let order;
    if (orderStatus) {
      order = await Order.find({ vendorID: req.user._id, _id: orderId, status: (orderStatus === "All") ? "" : orderStatus });
    } else {
      order = await Order.find({ vendorID: req.user._id, _id: orderId });
    }

    if (!order) {
      return res.status(500).json({ error: "Cannot find order. " })
    }

    return res.status(200).json({ order: order });
  } catch {
    return res.status(500).json({ error: "Cannot find order. " })
  }
}

exports.manageOrder = async (req, res) => {
  const orders = await Order.find({ vendorID: req.user._id })
  return res.status(200).json((orders) ? { orders: orders } : { orders: "" });
}

exports.vendorHomepage = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    return res.status(200).json({ vendor: vendor });
  } catch {
    return res.status(500).json({ error: "Vendor not found" })
  }
}

exports.vendorProductPage = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    return res.status(200).json({ vendor: vendor });
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
    res.status(200).json({ordersByStatus: ordersCountByStatus});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.postVendorDashboard = async (req, res) => {

}

exports.checkout = async (req, res) => {
  return res.status(200).json("hahah");
}

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("http://localhost:3000/");
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
    const vendor = await Vendor.findOne({ email: req.body.email });

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
  const banDuration = req.body.banDate; // This should be in days or months

  let endDate;

  if (banDuration === '1 month') {
    endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);
  } else {
    const banDays = parseInt(banDuration); // Convert the ban duration to integer
    endDate = new Date(Date.now() + banDays * 24 * 60 * 60 * 1000); // Add the ban duration to the current date
  }

  try {
    const user = await User.findById(userId);
    const vendor = await Vendor.findById(userId);
    const shipper = await Shipper.findById(userId);

    if (user) {
      await User.updateOne({ _id: userId }, { banEndDate: endDate });
    } else if (vendor) {
      await Vendor.updateOne({ _id: userId }, { banEndDate: endDate });
    } else if (shipper) {
      await Shipper.updateOne({ _id: userId }, { banEndDate: endDate });
    } else {
      throw new Error('User does not exist!');
    }

    return res.status(200).json("Banned user successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

exports.userProfile = async (req, res) => {
  return res.status(200).json("profile page");
}

exports.updateVendorWallpaper = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ email: req.body.email });
    if (req.file) {
      const image = {
        data: fs.readFileSync("uploads/" + req.file.filename),
      };
      vendor.wallpaper = image;
    }
    await vendor.save();
    return res.json('Profile has been updated!')
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}