const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' });
});

router.get('/profile', (req, res, next) => {
  const { name, occupation } = req.query;

  const data = {
    name,
    occupation,
  };

  res.render('profile', data);
});

router.get('/:path', (req, res) => {
  const { path } = req.params;

  res.json({
    confirmation: 'success',
    app: process.env.TURBO_APP_ID,
    data: path,
  });
});

router.get('/send', (req, res) => {
  res.send('This is the Send Route');
});

router.get('/redirect', (req, res) => {
  res.redirect('https://www.turbo360.co/landing');
});

module.exports = router;
