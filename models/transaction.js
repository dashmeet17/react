var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var trxnSchema = new Schema({
  transactionID: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  paymentMode: { type: String, required: true },
  amount: { type: Number, required: true }
});

//create a model using schema
var Transaction = mongoose.model('Transaction', trxnSchema);

// make this available to our users in our Node applications
module.exports = Transaction;
