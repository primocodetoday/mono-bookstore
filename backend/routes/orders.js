const express = require('express');
const router = express.Router();
const Order = require('../models/OrderModel');

// Store
router.post('/', async (req, res) => {
  const order = new Order({
    order: req.body.order,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    city: req.body.city,
    zip_code: req.body.zip_code,
  });

  try {
    const newOrder = await order.save();
    res.status(201).json({ data: newOrder, message: 'New order added' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
