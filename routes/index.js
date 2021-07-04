const express = require('express');

const router = express.Router();

const profiles = {
  freward: {
    name: 'Francesca',
    company: 'Jit',
    languages: ['javascript', 'php'],
  },
  jachiv: {
    name: 'John',
    company: 'PGE',
    languages: ['python', 'c#'],
  },
  bgates: {
    name: 'Bill',
    company: 'MediaE',
    languages: ['golang', 'java'],
  },
};

router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' });
});

router.get('/profile/:username', (req, res, next) => {
  const { username } = req.params;

  const current = profiles[username];

  if (!current) {
    res.json({
      confirmation: 'fail',
      message: `Profile ${username} doesn't exist`,
    });
    return;
  }

  res.render('profile', current);
});

router.post('/addprofile', (req, res, next) => {
  const { body } = req;

  if (!Array.isArray(body.languages)) {
    const proper = body.languages.split(', ').map((str) => str.trim());
    body.languages = proper;
  }

  console.log(body);
});

module.exports = router;
