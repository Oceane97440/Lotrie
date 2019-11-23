const express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser");

var app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));




mongoose.connect("mongodb+srv://oceane08:password974@cluster0-owldh.mongodb.net/test?retryWrites=true&w=majority", 
{useNewUrlParser: true},() =>

console.log("BDD CONNECTER")
);



//Midllwars
//Route vers index.js
const index = require('./routes/index');

app.use('/', index)

//Route vers liste.js
const listes = require('./routes/listes');

app.use('/listes', listes)

















//Port 3000
app.listen(3000, () => {
    
});