const mongoose = require('mongoose');
const Joi = require('joi');
const joigoose = require('joigoose')(mongoose);

const orderSchema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    order: Joi.array().min(1).required(),
    first_name: Joi.string().min(4).max(50).required(),
    last_name: Joi.string().min(5).max(50).required(),
    city: Joi.string().required(),
    zip_code: Joi.string()
      .regex(/\d{2}-\d{3}/)
      .required(),
  });

const OrderModel = new mongoose.Schema(joigoose.convert(orderSchema));

module.exports = mongoose.model('Order', OrderModel);
