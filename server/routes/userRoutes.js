const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 *  App routes
*/

router.get('/', userController.homepage);
router.get('/product/:id', userController.productpage);
router.get('/register', userController.registerpage);

module.exports = router;