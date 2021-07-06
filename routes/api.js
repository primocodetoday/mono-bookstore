// Full Documentation - https://www.turbo360.co/docs
const express = require('express');
const router = express.Router();
const Book = require('../models/book');

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
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one
router.get('/:id', getBook, (req, res) => {
  res.send(res.book);
});

// Store
router.post('/', async (req, res) => {
  const book = new Book({
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
    price: req.body.price,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update
router.patch('/:id', getBook, async (req, res) => {
  if (req.body.name !== null) {
    res.book.name = req.body.name;
  }

  try {
    const updatedBook = await res.book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete('/:id', getBook, async (req, res) => {
  try {
    await res.book.remove();
    res.json({ message: `Deleted book - ${res.book.name}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
