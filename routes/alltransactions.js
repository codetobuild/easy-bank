const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactions')


// view transaction history
router.get('/', async (req, res) => {

    const transaction = await Transaction.find({});
    console.log('transaction')

    res.render('transaction', {transaction});
})

 



module.exports = router;