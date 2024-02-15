const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true }
});

categorySchema.pre('remove', async function(next) {
    try {
        await Product.deleteMany({ category: this._id });
        next();
    } catch (error) {
        next(error);
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;