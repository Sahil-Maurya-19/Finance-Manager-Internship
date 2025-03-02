const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  dueDate: { type: Date, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['Unpaid', 'Paid'], required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Bill', billSchema);
