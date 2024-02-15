
const Category = require('../models/category');
const Product = require('../models/product');

exports.getInsertPage = async (req, res) => {
    try {
        const categories = await Category.find();
        res.render('insert', { categories });
    } catch (error) {
        console.error('Error fetching categories:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

exports.insertCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;
        const category = new Category({ name: categoryName });
        await category.save();
        res.redirect('/insert');
    } catch (error) {
        console.error('Error inserting category:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

exports.insertProduct = async (req, res) => {
    try {
        const { productName, productDescription, productCategory } = req.body;
        const product = new Product({ name: productName, description : productDescription, category: productCategory });
        await product.save();
        res.redirect('/insert');
    } catch (error) {
        console.error('Error inserting product:', error.message);
        res.status(500).send('Internal Server Error');
    }
};
