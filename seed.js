const mongoose  = require('mongoose');
const user = require('./models/user');

const connectDB = require('./config/dbsetup');
connectDB(); 

const seedUsers = [
    {
        name: 'Shivani',
        email: 'shivani80@gmail.com',
        credits: 10000
    },
    {
        name: 'Bobby',
        email: 'booby199@gmail.com',
        credits: 7000
    },
    {
        name: 'Yashi',
        email: 'yashi@gmail.com',
        credits: 4500
    },
    {
        name: 'Vaibhavi',
        email: 'ios@yahoo.com',
        credits: 8600
    },
    {
        name: 'Kunika',
        email: 'kunika@gmail.com',
        credits: 7500
    },
    {
        name: 'Rewa',
        email: 'rewa@yahoo.com',
        credits: 6900
    },
    {
        name: 'Karimi',
        email: 'karimi09@gmail.com',
        credits: 3000
    },
    {
        name: 'Aman',
        email: 'aman32@yahoo.com',
        credits: 2100
    },
    {
        name: 'Vijeta',
        email: 'vijeta87@gmail.com',
        credits: 5300
	}
]


// insert dummy data to database
user.insertMany(seedUsers)
    .then(res => console.log(res))
    .catch(err => console.log(err))

