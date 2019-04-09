const express = require('express');
const router = express.Router();

const Guest = require('../models/Guest');


router.get('/', (req, res) => {
    var guests;
    Guest.find({}, function(err, docs){
        if (err) throw err;
        guests = docs;
        if (guests.length != 0){
            var waitTime = guests.length * 5;
        } else {
            var waitTime = 5;
        }
        return res.render('Welcome', {waitTime});
    });
});

module.exports = router;