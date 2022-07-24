const express = require('express');
const router = express.Router();
const Book = require('../models/BookModel');
const getBook = require('../middleware/getBook');

const getBookWithCoverUrl = (req, book) => {
  if (!book.cover_url.match(/^http/)) {
    book.cover_url = `${req.protocol}://${req.get('host')}${book.cover_url}`;
  }
  return book;
};

// Getting all
router.get('/', async (req, res) => {
  const searchOptions = {};

  const page = +req.query.page || 1;
  const limit = 10;

  if (req.query.title) {
    searchOptions.title = new RegExp(req.query.title, 'i');
  }

  try {
    const books = await Book.find(searchOptions);
    const result = books.slice((page - 1) * limit, page * limit).map((book) => getBookWithCoverUrl(req, book));

    res.status(200).json({
      data: result,
      metadata: {
        page,
        records_per_page: limit,
        total_records: books.length,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one
router.get('/:id', getBook, (req, res) => {
  res.send(res.book);
});

// Create
router.post('/', async (req, res) => {
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
router.patch('/:id', getBook, async (req, res) => {
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
router.delete('/:id', getBook, async (req, res) => {
  try {
    await res.book.remove();
    res.json({ message: `Deleted book - ${res.book.title}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
