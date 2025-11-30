const express = require('express');
const app = express();
const cors = require("cors");
const productsRoute = require('./routes/products.js');

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:5173" //CORS FOR REACT!
}));

app.use(express.json());

// Products route
app.use('/products', productsRoute);

app.get('/', (req, res) => {
    res.send('E-commerce Backend çalışıyor 🚀');
});

app.listen(PORT, () => {
    console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
