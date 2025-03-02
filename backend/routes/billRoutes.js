const express = require('express');
const router = express.Router();
const { addBill } = require('../controllers/billController');

router.post('/', addBill);

module.exports = router;
