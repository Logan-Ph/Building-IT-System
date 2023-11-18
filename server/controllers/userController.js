const User = require('../models/user')
const Vendor = require('../models/vendor')
const Shipper = require('../models/shipper')
const Product = require('../models/product')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const initializePassport = require('../config/passport-config')
require('dotenv').config()

initializePassport(
  passport,
)

exports.homePage = async (req, res) => {
  try {
    let product = await Product
      .find({}, { img: 1, product_name: 1, category: 1, price: 1, _id: 1, image_link: 1 }).limit(10);
    res.json(product);
    } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.productPage = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    res.json(product);
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
    const username = req.body.username;
    const phoneNumber = req.body.phoneNumber;

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const checkUsername =
      (await User.findOne({ username: username })) ||
      (await Vendor.findOne({ username: username })) ||
      (await Shipper.findOne({ username: username }));

    const checkPhone =
      (await User.findOne({ phoneNumber: phoneNumber })) ||
      (await Vendor.findOne({ phoneNumber: phoneNumber }));

    if (checkUsername) {
      return res.json("Username already exists.")
    } else if (checkPhone) {
      return res.json("Phone number already exists.")
    } else {
      const newUser = new User({
        username: username,
        password: hashedPassword,
        name: req.body.name,
        address: req.body.address,
        phoneNumber: phoneNumber,
      });
      await newUser.save();
      return res.json("success");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.vendorRegister = async (req, res) => {
  const bcrypt = require('bcrypt');
  try {
    const username = req.body.username;
    const phoneNumber = req.body.phoneNumber;
    const businessName = req.body.businessName;

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const checkUsername =
      (await User.findOne({ username: username })) ||
      (await Vendor.findOne({ username: username })) ||
      (await Shipper.findOne({ username: username }));

    const checkPhone =
      (await User.findOne({ phoneNumber: phoneNumber })) ||
      (await Vendor.findOne({ phoneNumber: phoneNumber })) ||
      (await Shipper.findOne({ phoneNumber: phoneNumber }));

    const checkBusinessName = (await Vendor.findOne({ businessName: businessName }));

    if (checkUsername) {
      return res.json("Username already exists.");
    } else if (checkPhone) {
      return res.json("Phone number already exists.")
    } else if (checkBusinessName) {
      return res.json("Business name already exists.")
    } else {
      const newVendor = new Vendor({
        username: username,
        password: hashedPassword,
        businessName: businessName,
        address: req.body.address,
        phoneNumber: phoneNumber,
      });
      await newVendor.save();
      return res.json("success");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.shipperRegister = async (req, res) => {
  const bcrypt = require('bcrypt');
  try {
    const username = req.body.username;
    const phoneNumber = req.body.phoneNumber;
    const distributionHub = req.body.distributionHub

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const checkUsername =
      (await User.findOne({ username: username })) ||
      (await Vendor.findOne({ username: username })) ||
      (await Vendor.findOne({ username: username }));


    const checkPhone =
      (await User.findOne({ phoneNumber: phoneNumber })) ||
      (await Vendor.findOne({ phoneNumber: phoneNumber })) ||
      (await Shipper.findOne({ phoneNumber: phoneNumber }));

    if (checkUsername) {
      return res.json("Username already exists.")
    } else if (checkPhone) {
      return res.json("Phone number already exists.")
    } else {
      const newShipper = new Shipper({
        username: username,
        password: hashedPassword,
        name: req.body.name,
        address: req.body.address,
        phoneNumber: phoneNumber,
        distributionHub: distributionHub
      });
      await newShipper.save();
      return res.json("success");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.loginPage = (req, res) => {
  try {
    res.json();
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}


exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};