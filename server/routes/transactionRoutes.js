const express = require('express');
const { addTransaction, getAllTransaction, editTransaction , deleteTransaction } = require('../controllers/transactionCtrl');

//router object
const router = express.Router()

//routes
//add transaction 
router.post('/add-transaction', addTransaction);

// edit transaction
router.post('/edit-transaction', editTransaction);

// delete transaction
router.post('/delete-transaction', deleteTransaction);

//get transaction
router.post('/get-transaction', getAllTransaction);

module.exports = router;