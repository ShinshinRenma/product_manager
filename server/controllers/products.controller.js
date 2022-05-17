// Controller - All CRUD
// Making queries to DB using model
const Product = require("../models/products.model");


//Create
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({product: newlyCreatedProduct}))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
}

// Read all
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

// Read one
module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(oneProduct => res.json({ product: oneProduct}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

// Update one
module.exports.updateOneProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedProduct => res.json({product: updatedProduct}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

// Delete one
module.exports.deleteAProduct = (req, res) => {
    console.log(req.params);
    Product.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}