const mongooseConfig = require("../config/mongoose.config");

// Import Mongoose to build a model
const mongoose = require("mongoose");

// The schema - rules that the entries in DB must follow
const productSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long."]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    description: {
        type: String,
        required: [true, "Descriptions is required"],
        minlength: [10, "Setup must be at least 10 characters long."]
    }
    }, 
    {timestamps: true}
);

// The model - This is what we use to make the actual queries to DB
const Product = mongoose.model('Product', productSchema);

// Export the model
module.exports = Product;