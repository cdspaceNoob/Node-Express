const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    docTitle: 'Add Product Page',
    path: '/admin/add-product',
    mainCSS: true,
    productCSS: true,
    activeAddProduct: true,
    activeProduct: true,
  });
});

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(products);
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
