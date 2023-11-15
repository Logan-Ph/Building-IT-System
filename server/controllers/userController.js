const User = require('../models/user')
const Vendor = require('../models/vendor')
const Product = require('../models/product')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const user = require('../models/user')
require('dotenv').config()


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
    res.render('register', { title: 'Shop Web - register' });
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
    const email = req.body.email;
    const phone_number = req.body.phone_number;

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const checkUsername =
      (await User.findOne({ username: username })) ||
      (await Vendor.findOne({ username: username }));

    const checkEmail = (await User.findOne({ email: email }));

    const checkPhone =
      (await User.findOne({ phone_number: phone_number })) ||
      (await Vendor.findOne({ phone_number: phone_number }));

    if (checkUsername) {
      res.send(`Username ${username} already exists. Please enter another one.`);
    } else if (checkEmail) {
      res.send(`Email ${email} has already been registered. Please enter another one.`);
    } else if (checkPhone) {
      res.send(`Phone number ${phone_number} has already been registered. Please enter another one.`);
    } else {
      const newUser = new User({
        username: username,
        password: hashedPassword,
        name: req.body.name,
        email: email,
        address: req.body.address,
        phone_number: phone_number,
      });
      await newUser.save();
      res.send("User registered successfully.");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.vendorRegister = async (req, res) => {
  const bcrypt = require('bcrypt');
  try {
    const username = req.body.username;
    const phone_number = req.body.phone_number;
    const business_name = req.body.business_name;

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const checkUsername =
      (await User.findOne({ username: username })) ||
      (await Vendor.findOne({ username: username }));

    const checkPhone =
      (await User.findOne({ phone_number: phone_number })) ||
      (await Vendor.findOne({ phone_number: phone_number }));

    const checkBusinessName = (await Vendor.findOne({ business_name: business_name }));

    if (checkUsername) {
      res.send(`Username ${username} already exists. Please enter another one.`);
    } else if (checkPhone) {
      res.send(`Phone number ${phone_number} has already been registered. Please enter another one.`);
    } else if (checkBusinessName) {
      res.send(`Business Name ${business_name} has already been registered. Please enter another one.`);
    } else {
      const newVendor = new Vendor({
        username: username,
        password: hashedPassword,
        business_name: business_name,
        business_address: req.body.business_address,
        phone_number: phone_number,
      });
      await newVendor.save();
      res.send("Vendor registered successfully.");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.loginPage = (req, res) => {
  try {
    res.json("This is login Page");
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}


exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("http://localhost:3000/");
};