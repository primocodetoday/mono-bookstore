require('dotenv').config();
const port = process.env.PORT || 3000;
const express = require('express');

const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

const books = require('./routes/books');
const orders = require('./routes/orders');
app.use('/api/v1/books', books);
app.use('/api/v1/orders', orders);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;
