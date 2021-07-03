const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' });
});

router.get('/json', (req, res) => {
  res.json({
    confirmation: 'success',
    app: process.env.TURBO_APP_ID,
    data: 'this is a sample json route.',
  });
});

router.get('/send', (req, res) => {
  res.send('This is the Send Route');
});

router.get('/redirect', (req, res) => {
  res.redirect('https://www.turbo360.co/landing');
});

module.exports = router;
