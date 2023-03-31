const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// extended: false means that the values can be strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
  // res.status(404).send('<h1>Page not found</h1>');
  res.status(404).sendFile(path.join(__dirname,'./','views','error-404.html'));
});

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
