const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

//Initializing app
const app = express();

//EJS
app.use(expressLayouts);
app.set("view engine", 'ejs');

//DB Config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Bodyparser
app.use(express.urlencoded({extended: true}));

//Routes
app.use('/', require('./routes/index'));
app.use('/customers', require('./routes/customers'));


//Set and Listen to port
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));