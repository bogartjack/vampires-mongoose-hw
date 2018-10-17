// 1. Require your node modules

const express = require('express');
const mongoose = require('mongoose');
const Vampires = require('../models/vampire.js');
require('../db/db');
const vampireData = require('./populateVampires');
Vampires.collection.insertMany(vampireData, (err, data) => {
	mongoose.connection.close();
});

// 2. Require your model (and possibly your extra data source);

// 3. Connect your database and collection name

// 4. Open your mongoose connection

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// I DID THIS ABOVE


// ### Add some new vampire data
Vampires.create({
	name: 'oneduder',
	hair_color: 'black',
	eye_colors: 'yellow',
	dob: new Date(1951, 2, 29, 8, 46),
	loves: ['puppies', 'kittens'],
	location: 'cleveland',
	gender: 'm',
	victims: 10000
}, (err, vampire) => {
	if(err) console.log(err);
	else console.log(vampire);
});

Vampires.create({
	name: 'twoduder',
	hair_color: 'brown',
	eye_colors: 'red',
	dob: new Date(1961, 3, 45, 10, 15),
	loves: ['murder', 'killing'],
	location: 'columbus',
	gender: 'm',
	victims: 999
}, (err, vampire) => {
	if(err) console.log(err);
	else console.log(vampire);
});

Vampires.create({
	name: 'onegirler',
	hair_color: 'pink',
	eye_colors: 'grey',
	dob: new Date(1768, 6, 29, 4, 26),
	loves: ['hot stuff', 'morbid shit'],
	location: 'cincinnati',
	gender: 'f',
	victims: 3
}, (err, vampire) => {
	if(err) console.log(err);
	else console.log(vampire);
});

Vampires.create({
	name: 'twogirler',
	hair_color: 'grey',
	eye_colors: 'mixed',
	dob: new Date(1521, 1, 30, 2, 12),
	loves: ['men', 'guys'],
	location: 'toledo',
	gender: 'f',
	victims: 312341
}, (err, vampire) => {
	if(err) console.log(err);
	else console.log(vampire);
});

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
