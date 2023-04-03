const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  console.log(products);
  res.render('shop', {
    prods: products,
    docTitle: 'Shop Title Test',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
    mainCSS: true,
    // layout: false
  });
});

module.exports = router;
