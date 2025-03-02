const Bill = require('../models/Bill');

exports.addBill = async (req, res) => {
  const { dueDate, description, amount, status, userId } = req.body;
  try {
    const bill = new Bill({ dueDate, description, amount, status, userId });
    await bill.save();
    res.status(201).json(bill);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add other routes for bills (like delete and get)
