// Full Documentation - https://www.turbo360.co/docs
const express = require('express');

const router = express.Router();

router.get('/:resource', (req, res) => {
  res.json({
    confirmation: 'success',
    resource: req.params.resource,
    query: req.query, // from the url query string
  });
});

router.get('/:resource/:id', (req, res) => {
  res.json({
    confirmation: 'success',
    resource: req.params.resource,
    id: req.params.id,
    query: req.query, // from the url query string
  });
});

module.exports = router;
