const express = require('express');

const router = express.Router();

router.post('/user', (req, res, next) => {
  const { body } = req;

  res.json({
    confirmation: 'success',
    route: 'registration',
    data: body,
  });
});

module.exports = router;
