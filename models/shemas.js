const mongoose = require("mongoose");

const MySchemas = new mongoose.Schema({
    nom:  String,
    prenom: String,
    genre:   String,
    ville:   String,
    domaine:   String,
    dob: { type: Date, default: Date.now },

  });
  module.exports = mongoose.model("shemas", MySchemas);