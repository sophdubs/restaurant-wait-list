const express = require('express');
const router = express.Router();

const Guest = require('../models/Guest');


//Welcome page
router.get('/', (req, res) => {
    var guests;
    Guest.find({}, function(err, docs){
        if (err) throw err;
        guests = docs;
    })
    console.log(guests);

    res.render('Welcome')});

// router.get('/add-new', (req, res) => res.render('Add-New'));

module.exports = router;