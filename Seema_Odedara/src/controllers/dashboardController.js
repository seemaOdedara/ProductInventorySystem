const Product = require('../models/product');
const Category = require('../models/category');

exports.getDashboardPage = async (req, res) => {
    try {
        const products = await Product.find().populate('category');
        const categories = await Category.find();
        res.render('dashboard', { products, categories });
    } catch (error) {
        console.error('Error fetching Data:', error.message);
        res.status(500).send('Internal Server Error');
    }
};