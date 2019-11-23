const express = require("express");
    const mongoose = require("mongoose");
    var controller = {};

    const shemas=require("../models/shemas");
    var app = express();

    mongoose.connect("mongodb+srv://oceane08:password974@cluster0-owldh.mongodb.net/test?retryWrites=true&w=majority", 
    {useNewUrlParser: true},() =>

    console.log("BDD CONNECTER")
    );

    controller.index = (req, res) => {
        //Chemain vers l'affiche hp
        res.render('index.ejs');  

    };

    controller.liste = (req, res) => {
        //Chemain vers l'affiche les donnée de la bdd
    
        // shemas.find({},(err, users)=>{
        //     console.log(users);
        //     console.log(err);
    
        //         res.render('users.ejs',{users:users});
        //     });
            res.render('users.ejs');
    };





module.exports = controller;
module.exports = shemas;
