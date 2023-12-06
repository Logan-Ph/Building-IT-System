const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');
const multer = require('multer');
const path = require('path');

require('dotenv').config

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads') // specify the path to save files
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) // specify the filename
    }
});

const upload = multer({ storage });
/**
 *  App routes
*/
function authenticateToken(req, res, next) {
    jwt.verify(req.cookies.accessToken, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) return res.status(500).json({ error: "You must login first!" })
        next()
    })
}

function authorizeUser(req, res, next) {
    if (req.user.role === "User") {
        next()
    }
    else {
        res.status(500).json({ error: "You are not authorized to access this route" })
    }
}

function authorizeShipper(req, res, next) {
    if (req.user.role === "Shipper") {
        next()
    }
    else {
        res.status(500).json({ error: "You are not authorized to access this route" })
    }
}

function authorizeVendor(req, res, next) {
    if (req.user.role === "User") {
        next()
    }
    else {
        res.status(500).json({ error: "You are not authorized to access this route" })
    }
}

function generateAccessToken(user) {
    const accessToken = jwt.sign({ user: user }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
    return accessToken
}

router.get('/user/:token/verify-email', userController.verifyEmail);
router.get('/user/:token/forgot-password', userController.resetPassword);
router.post('/user/:token/forgot-password', userController.postResetPassword);
router.post('/forgot-password', userController.forgotPassword);
router.get('/login/success', authenticateToken, authorizeUser, userController.loginSuccess);
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
            const accessToken = generateAccessToken(user);
            res.cookie('accessToken', accessToken, { httpOnly: true });
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
            const accessToken = generateAccessToken(user);
            res.cookie('accessToken', accessToken, { httpOnly: true });
            res.send(`<script>window.opener.postMessage({ user: ${JSON.stringify(user)} }, "*"); window.close();</script>`);
        });
    })(req, res);
});
router.get('/checkout', authenticateToken, authorizeUser, userController.checkout);
router.post('/checkout', authenticateToken, authorizeUser, userController.placeOrder);
router.get('/add-product/:id', authenticateToken, authorizeUser, userController.addProduct);
router.post('/dashboard/get-order', userController.getOrder);
router.post('/dashboard', authenticateToken, authorizeVendor, userController.vendorDashboard);
router.get('/logout', userController.logout);
router.post('/user-register', userController.userRegister);
router.post('/vendor-register', userController.vendorRegister);
router.post('/update-user', upload.single('file'), userController.updateUser);
module.exports = router;