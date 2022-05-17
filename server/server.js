const express = require ("express");
const cors = require("cors")
const app = express();
const PORT = 8000;
const DB = "products_db";

//Middleware
app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors());

// Connect to the DB
const exportedDBFunction = require("./config/mongoose.config");
exportedDBFunction(DB);

// Import routes here after construction
const routesFunction = require("./routes/products.routes");
routesFunction(app);

app.listen(PORT, () => console.log(`>>> Server up on port: ${PORT}`))