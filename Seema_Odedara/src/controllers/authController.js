// const Product = require('../models/product');
// const Category = require('../models/category');


// exports.getLoginPage = (req, res) => {
//     res.render('login');
// };

// exports.postLogin = async (req, res) => {
//     const { username, password } = req.body;

//     if (username === 'user' && password === 'password') {
//         try {
//             const products = await Product.find().populate('category');
//             const categories = await Category.find();
//             res.render('dashboard', { products, categories });
//         } catch (err) {
//             console.error('Error fetching data:', err.message);
//             res.status(500).send('Internal Server Error');
//         }

//     } else {
//         res.send('Invalid username or password');
//     }
// };


const bcrypt = require('bcrypt');

const hardcodedUsername = 'user';
const hardcodedPassword = '$2b$10$7wvYp7o7ixE3tkMfwr9Uee6v5/SNJ11xolB4ckqHtQmBeXraUqZdm'; 
// hashed password for 'password'

exports.getLoginPage = (req, res) => {
    res.render('login');
};

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (username === hardcodedUsername && password === 'password') {
            req.session.user = {
                username: hardcodedUsername
            };
            res.redirect('/dashboard'); 
        } else {
            res.send('Invalid username or password');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Internal Server Error');
    }
};
