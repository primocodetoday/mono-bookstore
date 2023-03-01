const mongoose = require('mongoose');

const Book = new mongoose.Schema({
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

module.exports = mongoose.model('Book', Book);
