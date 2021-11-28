const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
    
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: true
    }
},{ timestamps: true });

const UserDetails = mongoose.model('UserDetails',userDetailsSchema);

module.exports = UserDetails;