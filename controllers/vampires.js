const express = require('express');
const router = express.Router();
const Vampires = require('../models/vampire.js');
const vampireData = require('../vampire_app/populateVampires.js');
Vampires.collection.insertMany(vampireData, (err, data) => {
	mongoose.connection.close();
});
