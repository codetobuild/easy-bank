const mongoose = require('mongoose');

const connectDB = () => {
    const mongoose = require('mongoose');
    mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('database connected!');
    });
}
module.exports = connectDB;  



  