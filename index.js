const express = require('express');
const app = express();
const cors = require("cors");
const productsRoute = require('./routes/products.js');

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

// Products route
app.use('/products', productsRoute);

app.get('/', (req, res) => {
    res.send('Backend is running...');
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on 3000");
});
