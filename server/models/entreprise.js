const mongoose = require("mongoose");

const entrepriseSchema = mongoose.Schema({
    name: {type: String, required: true},
    secteur: {type: String, required: true},
    ville: {type: String, required: true},
    tel: {type: String, required: true},
    address: {type: String, required: true},
    website: {type: String, required: true},
    Longitude: {type: String, required: true},
    Latitude: {type: String, required: true},
    image: {type: String, required: true}
});

const entreprise = mongoose.model('entreprise', entrepriseSchema);

module.exports = entreprise;
