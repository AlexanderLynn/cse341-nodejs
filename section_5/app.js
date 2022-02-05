const http = require('http');
const path = require('path');

// Express Modules
const express = require('express');
const bodyParser = require('body-parser');

// Custom Modules
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Creates server
const app = express();
// Adds body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Defines routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Catch all 404 route
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Causes server to listen
app.listen(3000);
