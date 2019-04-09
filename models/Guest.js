const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tel: {
        type: Number,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    requests: {
        type: String,
        required: false
    },
    preference: {
        type: String,
        required: true
    }

});

const Guest = mongoose.model('Guest', GuestSchema);

module.exports = Guest;