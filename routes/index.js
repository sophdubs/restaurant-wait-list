const express = require('express');
const router = express.Router();

const Guest = require('../models/Guest');

//Setting up Twilio
const SID = require('../config/keys').TwilioSID;
const TOKEN = require('../config/keys').TwilioToken;
const client = require('twilio')(SID,TOKEN);

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

router.get('/test', (req, res) => {
    client.messages.create({
        to: '+61452286187',
        from: '+61480016097',
        body: 'testing twilio messages'
    });
    res.send('done');

});

function updateDB(index){
    Guest.find({}, (err, docs) => {
        if (err) throw err;
        docs.forEach(function(doc){
            if (doc.guestNo === index){
                doc.remove();
            } else if(doc.guestNo > index){
                doc.guestNo -= 1;
                doc.save();
            }
        });
    });
}


module.exports = router;

