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







//Welcome page
// router.get('/', (req, res) => {
//     var guests;
//     Guest.find({}, function(err, docs){
//         console.log('after find but before guests print');
//         if (err) throw err;
//         guests = docs;
//         if (typeof guests != 'undefined') {
//             var waitTime = guests.length;
//             return render('Welcome', {waitTime});
//         } else {
//             var waitTime = 5;
//             res.render('Welcome', {waitTime});
//         }



module.exports = router;