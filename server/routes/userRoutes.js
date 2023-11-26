const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');
require('dotenv').config

/**
 *  App routes
*/
function authenticateToken(req, res, next) {
    jwt.verify(req.cookies.accessToken, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) return res.json()
        next()
    })
}

router.get('/user/:token/verify-email', userController.verifyEmail);
router.get('/user/:token/forgot-password', userController.resetPassword);
router.post('/user/:token/forgot-password', userController.postResetPassword);
router.post('/forgot-password', userController.forgotPassword);
router.get('/login/success', userController.loginSuccess);
router.get('/', userController.homePage);
router.get('/product/:id', userController.productPage);
router.get('/login', userController.loginPage);
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            // Authentication failed
            return res.json({ message: info.message });
        }

        // Authentication sucess
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.json({ user: user, message: info.message });
        });
    })(req, res, next);
});

router.get('/auth/google', passport.authenticate("google", { scope: ["profile", "email"] }));
router.get('/auth/google/callback', (req, res, next) => {
    passport.authenticate("google", (err, user, info) => {
        if (err || !user) {
            // Authentication failed
            res.send(`<script>window.opener.postMessage({ error: "${info.message}" }, "*"); window.close();</script>`);
            return;
        }

        // Authentication sucess
        req.logIn(user, (err) => {
            if (err) {
                res.send(`<script>window.opener.postMessage({ error: "${info.message}" }, "*"); window.close();</script>`);
                return;
            }
            res.send(`<script>window.opener.postMessage({ user: ${JSON.stringify(user)} }, "*"); window.close();</script>`);
        });
    })(req, res);
});
router.get('/add-product/:id', userController.addProduct)
router.get('/logout', userController.logout);
router.post('/user-register', userController.userRegister);
router.post('/vendor-register', userController.vendorRegister);
module.exports = router;