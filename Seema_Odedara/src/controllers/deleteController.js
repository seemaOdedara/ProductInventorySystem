const Category = require('../models/category');
const Product = require('../models/product');

exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        await Product.findByIdAndDelete(productId);
        res.redirect('/dashboard'); 
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).send('Internal Server Error'); // Handle errors
    }
};

exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const products = await Product.find({ category: categoryId });

        for (let i = 0; i < products.length; i++) {
            await Product.findByIdAndDelete(products[i]._id);
        }
        await Category.findByIdAndDelete(categoryId);

        res.redirect('/dashboard'); 
    } catch (error) {
        console.error('Error deleting category and associated products:', error);
        res.status(500).send('Internal Server Error'); // Handle errors
    }
};
