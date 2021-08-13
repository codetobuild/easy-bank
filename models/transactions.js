const mongoose = require('mongoose');
const {Schema} = mongoose;

const transactionSchema = new Schema({
    fromUser: {
        type: String,
        required: true,
    },
    toUser: {
        type: String,
        required: true,
    },
    credits:{
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;

