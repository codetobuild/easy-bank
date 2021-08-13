const express = require('express');
const router = express.Router();
const User = require('../models/user');

// view all customers
router.get('/', async(req, res) => {
    const users = await User.find({});
    console.log(users)

    res.render('customers', {users});
})

router.get('/:id', async(req, res) => {
    try{
        console.log(req.baseUrl);
        const {id} = req.params;
        const user = await User.findById(id);
        user.backUrl = req.baseUrl;
        console.log(user);
        res.render('customerDetails', {user});
    }catch(err){
        res.send('user not found');
    }
    
})
 
// view one customers 
 

module.exports = router; 