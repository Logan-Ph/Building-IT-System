const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');
const Product = require('../models/product')
const jwt = require('jsonwebtoken')
require('dotenv').config
require('../config/passportGoogle')
require('../config/passport-config')
/**
 *  App routes
*/

function authenticateToken(req, res, next) {
    jwt.verify(req.user.accessToken, process.env.ACCESS_TOKEN, (err) => {
        if (err) return res.redirect('/logout')
        next()
    })
}

function checkAuthenticated(req, res, next) {
    console.log("log user in authenciated function")
    console.log(req.session.passport)
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

router.get('/',checkAuthenticated , async (req, res) => {
    try {
        let product = await Product.find({}, { img: 1, product_name: 1, category: 1, price: 1, _id: 1, image_link: 1 }).limit(10);
        res.json({ product: product, user: req.session.passport })
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }
});

router.get('/product/:id',checkAuthenticated, userController.productPage);
router.get('/login', userController.loginPage);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/auth/google', passport.authenticate("google", { scope: ["profile"] }))
router.get('/auth/google/callback', (req, res, next) => {
    passport.authenticate("google", {
        failureRedirect: 'http://localhost:3000/login'
    }, (err, user) => {
        if (err) return next(err);
        req.logIn(user, (err) => {
            if (err) return next(err);
            res.redirect('http://localhost:3000/');
        });
    })(req, res, next);
});

router.get('/logout', userController.logout);
router.post('/user-register', userController.userRegister);
router.post('/vendor-register', userController.vendorRegister);

module.exports = router;