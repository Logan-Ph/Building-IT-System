const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');
const multer = require('multer');
const path = require('path');

require('dotenv').config

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads') // specify the path to save files
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) // specify the filename
    }
});

const upload = multer({ storage });
/**
 *  App routes
*/


// authorization
function authorizeUser(req, res, next) {
    try {
        (req.user && req.user.role === "User") ? next() : res.status(500).json({ error: "You are not authorized to access this route" })
    } catch {
        res.status(500).json({ error: "You are not authorized to access this route" })
    }
}

// authorization
function authorizeShipper(req, res, next) {
    try {
        (req.user && req.user.role === "Shipper") ? next() : res.status(500).json({ error: "You are not authorized to access this route" })
    } catch {
        res.status(500).json({ error: "You are not authorized to access this route" })
    }
}

// authorization
function authorizeVendor(req, res, next) {
    try {
        (req.user && req.user.role === "Vendor") ? next() : res.status(500).json({ error: "You are not authorized to access this route" })
    } catch {
        res.status(500).json({ error: "You are not authorized to access this route" })
    }
}

// authorization
function authorizeNotVendor(req, res, next) {
    try {
        (!req.user || req.user.role !== "Vendor") ? next() : res.status(500).json({ error: "You are not authorized to access this route" })
    }
    catch {
        res.status(500).json({ error: "You are not authorized to access this route" })
    }
}

// authenticate token 
function authenticateToken(req, res, next) {
    jwt.verify(req.cookies.accessToken, process.env.ACCESS_TOKEN, (err, user) => { // verify the cookies on the header 
        if (err) return res.status(500).json({ error: "You must login first!" })
        next()
    })
}

// generate access token function 
function generateAccessToken(user) {
    const accessToken = jwt.sign({ user: user }, process.env.ACCESS_TOKEN, { expiresIn: '1h' }); // sign the user with the access token
    return accessToken
}

// user verify email route
router.get('/user/:token/verify-email', userController.verifyEmail);

// user forgot password route
router.get('/user/:token/forgot-password', userController.resetPassword);
router.post('/user/:token/forgot-password', userController.postResetPassword);
router.post('/forgot-password', userController.forgotPassword);

// get user data route (user, shipper, vendor)
router.get('/login/success', authenticateToken, userController.loginSuccess);

// user homepage route
router.get('/', userController.homePage);

// user product details route
router.get('/product/:id', userController.productPage);

// user checkout route
router.get('/checkout', authenticateToken, authorizeUser, userController.checkout);
router.post('/checkout', authenticateToken, authorizeUser, userController.placeOrder);

// user add to cart route
router.get('/add-product/:id', userController.addProduct);

// user update profile route
router.post('/update-user', upload.single('file'), userController.updateUser);

// vendor crud product route
router.post('/add-new-product', upload.single('file'), userController.addNewProduct);
router.post('/update-product', upload.single('file'), userController.updateProduct);
router.delete('/delete-product', userController.deleteProduct);
router.get('/manage-product', userController.manageProduct);

// vendor homepage (user side)
router.get('/vendor/:id', userController.vendorHomepage)

// vendor product page (user side)
router.get('/vendor/:id/product', userController.vendorProductPage);

//vendor manage order (vendor side)
router.post('/search-order', userController.searchOrder);
router.post('/confirm-order', userController.confirmOrder);
router.get('/manage-order', userController.manageOrder);

// vendor dashboard route (vendor side)
router.post('/dashboard', authenticateToken, authorizeVendor, userController.postVendorDashboard);
router.get('/dashboard', authenticateToken, authorizeVendor, userController.getVendorDashboard);

// logout route
router.get('/logout', userController.logout);

// user register route
router.post('/user-register', userController.userRegister);

// vendor register route
router.post('/vendor-register', userController.vendorRegister);

// admin ban user route
router.post("/ban-user", userController.banUser);

// authentication route via login function
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
            const accessToken = generateAccessToken(user); // create access token 
            res.cookie('accessToken', accessToken, { httpOnly: true }); // pass access token into the cookies
            return res.json({ user: user, message: info.message });
        });
    })(req, res, next);
});

// authentication route via gmail
router.get('/auth/google', passport.authenticate("google", { scope: ["profile", "email"] }));
router.get('/auth/google/callback', (req, res, next) => {
    passport.authenticate("google", (err, user, info) => {
        if (err || !user) {
            // Authentication failed
            res.send(`<script>window.opener.postMessage({ error: "${info.message}" }, "*"); window.close();</script>`);
            return;
        }

        // Authentication success
        req.logIn(user, (err) => {
            if (err) {
                res.send(`<script>window.opener.postMessage({ error: "${info.message}" }, "*"); window.close();</script>`);
                return;
            }
            const accessToken = generateAccessToken(user); // create access token
            res.cookie('accessToken', accessToken, { httpOnly: true }); // pass access token into the cookies
            res.send(`<script>window.opener.postMessage({ user: ${JSON.stringify(user)} }, "*"); window.close();</script>`);
        });
    })(req, res);
});

module.exports = router;