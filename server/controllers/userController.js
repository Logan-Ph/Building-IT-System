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
require('dotenv').config()

function generateAccessToken(user) {
  const accessToken = jwt.sign({ user: user }, process.env.ACCESS_TOKEN, { expiresIn: '20s' });
  return accessToken
}

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

  transporter.sendMail(message)
}

exports.loginSuccess = (req, res) => {
  if (req.user) {
    const accessToken = generateAccessToken(req.user);
    res.cookie('accessToken', accessToken, { httpOnly: true });
    res.json({ user: req.user });
  } else {
    res.json({ user: "" })
  }
}

exports.homePage = async (req, res) => {
  try {
    let product = await Product.find({}, { img: 1, product_name: 1, category: 1, price: 1, _id: 1, image_link: 1, ratings: 1 }).limit(10);
    return res.json({ product: product, user: req.user })
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.productPage = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    res.json({ product: product });
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
    const foundUser = await User.findOneAndUpdate({ email: user.user }, { verify: true })
    if (!foundUser) return res.status.json("error");
    return res.status(200).json("success")
  })
}

// Place the Order
exports.placeOrder = async (req, res) => {
  try {
    const { userID } = req.body;

    // Find the user's cart
    const userCart = await Cart.findOne({ userID }).populate('products.product');

    if (!userCart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    // Create an order based on the user's cart
    const order = new Order({
      cart: userCart._id,
      customerInfo: {
        name: req.body.customerName,
        email: req.body.customerEmail,
        address: req.body.customerAddress,
        phone: req.body.customerPhone
      },
      products: userCart.products.map((cartItem) => ({
        product: cartItem.product._id,
        quantity: cartItem.quantity,
        vendorInfo: {
          name: cartItem.product.owner.businessName || '',
          email: cartItem.product.owner.email || '',
          phone: cartItem.product.owner.phoneNumber ||''
        },
      })),
    });

    await order.save();

  
    await userCart.clearCart();

    res.json({ success: true, message: 'Order placed successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error placing order' });
  }
};



exports.addProduct = async (req, res) => {
  if (!req.user) {
    return res.status(500).json({ error: "Please log in or create an account to add items to your cart." })
  }
  const cart = await Cart.findOne({ userID: req.user._id })

  if (!cart) {
    const newCart = new Cart({
      userID: new mongoose.Types.ObjectId(req.user._id),
      products: [{
        product: new mongoose.Types.ObjectId(req.params.id),
        quantity: 1
      }]
    })
    await newCart.save()
  } else {
    await cart.addProduct(
      await Product.findById(req.params.id),
      1
    );
  }
  return res.status(200).json({ msg: "added to cart"})
}

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("http://localhost:3000/");
};