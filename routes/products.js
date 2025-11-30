const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../data/product-list.json');
let products = [];

try {
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    products = JSON.parse(jsonData);
} catch (err) {
    console.error('JSON dosyası okunamadı:', err);
}

// GET /products?search=&page=&limit=
router.get('/', (req, res) => {
    let { page = 1, limit = 10, search = '' } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);
    search = search.toLowerCase();

    let filtered = products.filter(p =>
        p.product_name.toLowerCase().includes(search) ||
        p.category.toLowerCase().includes(search) ||
        p.brand.toLowerCase().includes(search)
    );

    const total = filtered.length;
    const start = (page - 1) * limit;
    const end = start + limit;

    const paginated = filtered.slice(start, end);

    res.json({
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        data: paginated
    });
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.product_id === id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});
module.exports = router;
