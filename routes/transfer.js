
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Transaction =require('../models/transactions')

router.get('/', async (req, res) => {

    const users = await User.find({});
    res.render('transfer', {users});
})

router.put('/', async (req, res) => {
    try{
        const fromUser = await User.findById(req.body.from);
        const toUser= await User.findById(req.body.to);
        const credit = req.body.credit;
        
        const fromUserCredit= fromUser.credits;

        // if user fund has less credit
        if(credit > fromUserCredit || (req.body.to === req.body.from)) {
            throw new Error('Sender do not have enough fund!');
        }
        // update credit transfer
        fromUser.credits = fromUser.credits - credit;
        toUser.credits = parseInt(credit) + parseInt(toUser.credits);

        await fromUser.save();
        await toUser.save();

        // save transactino history
        const  newTransaction = new Transaction({
            fromUser : fromUser.name,
            toUser : toUser.name,
            credits: credit,
        });
       const trans =  await newTransaction.save();
       console.log(trans);

        return res.json({status: 200, msg: 'successs'});

    }catch(err){
        return res.json({status: 500, msg: 'fail', error: err.message});
    }

})

module.exports = router; 