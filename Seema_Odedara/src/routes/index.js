const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const insertController = require('../controllers/insertController');
const DashBoardController = require('../controllers/dashboardController');
const deleteController = require('../controllers/deleteController');
const updateController = require('../controllers/updateController')

router.get('/login', authController.getLoginPage);

router.post('/dashboard', authController.postLogin);

const authenticateUser = (req, res, next) => {
    if (req.session && req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
};
router.use(authenticateUser);
router.get('/dashboard', DashBoardController.getDashboardPage);
router.get('/insert', insertController.getInsertPage);
router.post('/insert/category', insertController.insertCategory);
router.post('/insert/product', insertController.insertProduct);

router.post('/deleteProduct/:id', deleteController.deleteProduct);
router.post('/deleteCategory/:id', deleteController.deleteCategory);

router.get('/updateProduct/:id', updateController.getUpdatePage);
router.post('/updateProduct/:id', updateController.upddateProduct);

module.exports = router;
