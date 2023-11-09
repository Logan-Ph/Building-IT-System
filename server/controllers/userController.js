require('../models/database')
const User = require('../models/user')
const Vendor = require('../models/vendor')
const Product = require('../models/product')

exports.homepage = async (req, res) => {
    try {
        let product = await Product
            .find({}, { img: 1, product_name: 1, category: 1, price: 1, _id: 1, image_link: 1 }).limit(10);
        // res.json(product)
        res.render('index', { title: 'Shop Web - Home', products: product });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }
}

exports.productpage = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }
}

exports.registerpage = (req, res) => {
    try {
        res.render('register', { title: 'Shop Web - register' });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }
}