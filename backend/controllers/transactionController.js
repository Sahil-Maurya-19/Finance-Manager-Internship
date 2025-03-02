const Transaction = require('../models/Transaction');

exports.addTransaction = async (req, res) => {
  const { date, description, amount, type, userId } = req.body;
  try {
    const transaction = new Transaction({ date, description, amount, type, userId });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add other routes for transactions (like delete and get)
