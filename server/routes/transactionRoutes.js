const express = require('express');
const { addTransaction, getAllTransaction } = require('../controllers/transactionCtrl');

//router object
const router = express.Router()

//routes
//add transaction 
router.post('/add-transaction', addTransaction);

//get transaction
router.post('/get-transaction', getAllTransaction);

module.exports = router;