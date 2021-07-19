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
app.use('/static/cover', express.static(`${__dirname}/public/images/cover`));

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.FRONT_HOST);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  req.method === 'OPTIONS' ? res.sendStatus(200) : next();
});

app.use('/api/v1/books', require('./routes/books'));
app.use('/api/v1/orders', require('./routes/orders'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;
