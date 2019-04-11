const express = require('express');
const router = express.Router();

const Guest = require('../models/Guest');

router.get('/add-new', (req, res) => res.render('Add-New'));

router.get('/confirmation', (req, res) => res.render('confirmation'));

router.post('/add-new', (req, res) => {
    const {name, tel, number, requests, preference} = req.body;
    var guestNo;
    var errors = [];

    if (!name || !tel || !number){
        errors.push({msg: 'Please fill in all the fields'});
        return res.render('add-new', {errors});
    } else {
        Guest.find({}, (err, docs) => {
            if (err) throw err;
            guestNo = docs.length + 1;

            const newGuest = new Guest({
                name, tel, number, requests, preference, guestNo
            });
            newGuest.save()
            .then(res.redirect('/customers/confirmation'))
            .catch(err => console.log(err));
        });
    }
});

module.exports = router;

