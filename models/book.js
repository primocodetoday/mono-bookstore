const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  cover_url: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Book', BookSchema);

//  "id": 457,
//     "title": "Matematyka 1. Podręcznik. Zakres podstawowy",
//     "author": "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
//     "cover_url": "/static/cover/book/457.jpg",
//     "pages": 280,
//     "price": 3200,
//     "currency": "PLN"
