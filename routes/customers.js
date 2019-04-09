const express = require('express');
const router = express.Router();

const Guest = require('../models/Guest');

router.get('/add-new', (req, res) => res.render('Add-New'));

router.get('/confirmation', (req, res) => res.render('confirmation'));
router.post('/add-new', (req, res) => {
    console.log(req.body);
    const {name, tel, number, requests, preference} = req.body;
    let errors = [];
    if (!name || !tel || !number){
        console.log('Should be an error message');
        errors.push({msg: 'Please fill in all the fields'});
        return res.render('add-new', {errors, name, tel, number, request, preference});
    } else {
        const newGuest = new Guest({
            name, tel, number, requests, preference
        });
        newGuest.save()
        .then(res.redirect('/customers/confirmation'))
        .catch(err => console.log(err));
    }
});

module.exports = router;

