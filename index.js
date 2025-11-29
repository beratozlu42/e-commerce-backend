const express = require('express');
const app = express();
const productsRoute = require('./routes/products.js');

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Products route
app.use('/products', productsRoute);

app.get('/', (req, res) => {
    res.send('E-commerce Backend çalışıyor 🚀');
});

app.listen(PORT, () => {
    console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
