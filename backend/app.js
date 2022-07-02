const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/errors')
app.use(express.json());

//Import all roudes
const products = require('./routes/product');
app.use('/api/v1', products);
app.use(errorMiddleware)

module.exports = app