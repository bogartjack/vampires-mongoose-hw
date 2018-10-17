const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db.js');
const app = express();
const vampireController = require('./controllers/vampires');

app.use(bodyParser.urlencoded({extended: false});
app.use(methodOverride('_method');
app.use('/vampires', vampireController);


