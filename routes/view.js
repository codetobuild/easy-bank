const express = require('express');
const router = express.Router();
const User = require('../models/user');

// view all customers
router.get('/', async(req, res) => {
    const users = await User.find({});
    console.log(users)

    res.render('customers', {users});
})

 
// view one customers 
router.get('/:id', async(req, res) => {
 try{
    const user = await User.findById({_id:req.params.id});
    res.render('viewCustomer', {user})
 }catch(err){
     res.send('error')
 }
   
})


module.exports = router; 