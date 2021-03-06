require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
}); // Config environment
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true, // Enable unique
    useNewUrlParser: true, // Must be true
    useUnifiedTopology: true, // Must be true
    useFindAndModify: false, // to use updateOne and updateMany
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

exports.customer = require('./customer');
exports.supplier = require('./supplier');
exports.good = require('./good');
exports.transaction = require('./transaction');
