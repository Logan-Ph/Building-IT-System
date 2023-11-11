const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 *  App routes
*/

router.get('/', userController.homepage);
router.get('/product/:id', userController.productpage);
router.post('/user-register', userController.userRegister);
router.post('/vendor-register', userController.vendorRegister);

module.exports = router;