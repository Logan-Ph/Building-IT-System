const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');
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

router.get('/', userController.homePage);
router.get('/product/:id', userController.productPage);
router.get('/login', userController.loginPage);
router.post('/login', passport.authenticate('local', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: 'http://localhost:3000/login',
    failureFlash : true,
}));

router.get('/logout', checkAuthenticated, userController.logout);
router.post('/user-register', userController.userRegister);
router.post('/vendor-register', userController.vendorRegister);

module.exports = router;