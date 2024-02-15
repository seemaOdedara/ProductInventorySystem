const Category = require('../models/category');
const Product = require('../models/product');

exports.getUpdatePage = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId).populate('category');
        const categories = await Category.find();
        res.render('update', { product, categories });
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.upddateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const { name, description, category } = req.body;

        await Product.findByIdAndUpdate(productId, { name, description, category });

        res.redirect('/dashboard'); 
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).send('Internal Server Error');
    }
};


