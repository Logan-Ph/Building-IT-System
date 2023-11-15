const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');
const Product = require('../models/product')
const jwt = require('jsonwebtoken')
require('dotenv').config

/**
 *  App routes
*/

function authenticateToken(req, res, next) {
    jwt.verify(req.session.passport.user.accessToken, process.env.ACCESS_TOKEN, (err) => {
        if (err) return res.redirect('/logout')
        next()
    })
}

function checkAuthenticated(req, res, next) {
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

router.get('/', async (req, res) => {
    try {
        let product = await Product.find({}, { img: 1, product_name: 1, category: 1, price: 1, _id: 1, image_link: 1 }).limit(10);
        (req.user) ? res.json({ product: product, user: req.user }) : res.json({ product: product })
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }
});

router.get('/product/:id', userController.productPage);
router.get('/login', userController.loginPage);
router.post('/login', passport.authenticate('local', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: 'http://localhost:3000/login',
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
            req.user = user;
            res.redirect('http://localhost:3000/');
        });
    })(req, res, next);
});

router.get('/logout', checkAuthenticated, userController.logout);
router.post('/user-register', userController.userRegister);
router.post('/vendor-register', userController.vendorRegister);

module.exports = router;