const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const { OpenAI } = require('openai')
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
const uploadBanner = multer({ storage }).array('files', 10);

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

// fetch slider images
router.get('/slider', userController.slider);

// user product details route
router.get('/product/:id', userController.productPage);

// user checkout route
router.get('/checkout', authenticateToken, authorizeUser, userController.checkout);
router.post('/checkout', authenticateToken, authorizeUser, userController.placeOrder);

// user cart route
router.get('/cart', userController.cartPage);

// user add to cart route
router.get('/add-product/:id', userController.addProduct);

// user remove product from cart route
router.get('/remove-product/:id', userController.removeProduct);

// user update profile route
router.post('/update-user', upload.single('file'), userController.updateUser);

// user register route
router.post('/user-register', userController.userRegister);
router.get('/user-order', userController.userOrder)


// user add message route
router.post('/chat/:id', userController.addMessage);
router.get('/chat', userController.getThreads);
router.post('/chat', userController.createThread);

// vendor update profile route
router.post('/update-vendor', upload.single('file'), userController.updateVendor);

// vendor crud product route
router.post('/add-new-product', upload.single('file'), userController.addNewProduct);
router.post('/update-product/:id', upload.single('file'), userController.updateProduct);
router.delete('/delete-product/:id', userController.deleteProduct);
router.get('/manage-product', userController.manageProduct);
router.get('/edit-product/:id', userController.getSingleProduct);

// vendor homepage (user side)
router.get('/vendor/:id', userController.vendorHomepage)

// vendor product page (user side)
router.get('/vendor/:id/product', userController.vendorProductPage);

// vendor edit storefront 
router.post('/edit-store', upload.fields([
    { name: 'coverPhoto', maxCount: 1 },
    { name: 'bigBanner', maxCount: 1 },
    { name: 'smallBanner1', maxCount: 1 },
    { name: 'smallBanner2', maxCount: 1 },
]), userController.editStore);

//vendor manage order (vendor side)
router.post('/confirm-order', userController.confirmOrder);
router.get('/manage-order', userController.manageOrder);

// vendor dashboard route (vendor side)
router.post('/dashboard', authenticateToken, authorizeVendor, userController.postVendorDashboard);
router.get('/dashboard', authenticateToken, authorizeVendor, userController.getVendorDashboard);

// logout route
router.get('/logout', userController.logout);

// admin dashboard
router.get('/admin/dashboard', userController.getAdminDashboard);

// admin manage user route
router.get('/admin/manage-user', userController.manageUser)

// vendor register route
router.post('/vendor-register', userController.vendorRegister);

// admin report user page
router.get('/admin/:id/report', userController.reportPage);

// admin ban user route
router.post("/ban-user", userController.banUser);

// admin upload homepage carousel image 
router.post("/upload-homepage-carousel", uploadBanner, userController.uploadHomepageCarousel);

// get reponse message from chatbot
router.post("/api/chatbot/message", userController.chatbotMessage);

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
        req.logIn(user, async (err) => {
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
        req.logIn(user, async (err) => {
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