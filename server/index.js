const express = require('express');
const products = require('../products.json')
const getProducts = require('./getProducts')

const app = express();

const PORT = 3001;

app.get('/api/products', getProducts);



app.get('/api/products/:id', getProducts);





app.listen(PORT, () => 
console.log (`Server running on port ${PORT}`))