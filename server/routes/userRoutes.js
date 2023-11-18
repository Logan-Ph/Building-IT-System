const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');
const jwt = require('jsonwebtoken')
require('dotenv').config

/**
 *  App routes
*/

function generateAccessToken(user) {
    const accessToken = jwt.sign({ user: user }, process.env.ACCESS_TOKEN, { expiresIn: '20s' });
    return accessToken
}

function authenticateToken(req, res, next) {
    jwt.verify(req.cookies.accessToken, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) return res.json()
        next()
    })
}

router.get('/login/success', (req, res) => {
    console.log(req.user)
    if (req.user) {
        const accessToken = generateAccessToken(req.user);
        res.cookie('accessToken', accessToken, { httpOnly: true });
        res.json({ user: req.user });
    } else {
        res.json({ user: "" })
    }
})

router.get('/', userController.homePage);
router.get('/product/:id', authenticateToken, userController.productPage);
router.get('/login', userController.loginPage);
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: 'http://localhost:3000/',
        failureRedirect: 'http://localhost:3000/login'
    })
})

router.get('/auth/google', passport.authenticate("google", { scope: ["profile"] }));
router.get('/auth/google/callback', (req, res, next) => {
    passport.authenticate("google", {
        failureRedirect: 'http://localhost:3000/login',
        failureFlash: true,
        failureMessage: true
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