//import the controller to use the instantiated
const ProductController = require("../controllers/products.controller");

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createNewProduct);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.delete("/api/products/:id", ProductController.deleteAProduct);
    app.put("/api/products/:id", ProductController.updateOneProduct)
}