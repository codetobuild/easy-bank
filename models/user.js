const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'user name required'],
    },
    email: {
        type: String,
        required: [true, 'email required'],
    },
    credits: {
        type: Number,
        min: 0,
        required: true,
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User;

