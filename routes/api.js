const express = require('express');
const router = express.Router();
const Book = require('../models/BookModel');

const getBook = async (req, res, next) => {
  let book;

  try {
    book = await Book.findById(req.params.id);
    if (book === null) {
      return res.status(404).json({ message: 'Cannot find book' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.book = book;
  next();
};

// Getting all
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one
router.get('/books/:id', getBook, (req, res) => {
  res.send(res.book);
});

// Store
router.post('/books', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    cover_url: req.body.cover_url,
    pages: req.body.pages,
    price: req.body.price,
    currency: req.body.currency,
  });

  try {
    const newBook = await book.save();
    res.status(201).json({ data: newBook, message: 'New book added' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update
router.patch('/books/:id', getBook, async (req, res) => {
  if (req.body.name !== null) {
    res.book.title = req.body.title;
  }

  try {
    const updatedBook = await res.book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete('/books/:id', getBook, async (req, res) => {
  try {
    await res.book.remove();
    res.json({ message: `Deleted book - ${res.book.title}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
