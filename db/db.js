const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/vampire';

mongoose.connect(connectionString, {useNewUrlParser: true});

mongoose.connection.on('connected', ()=>{
	console.log('mongoose connection established to: '+connectionString);
});

mongoose.connection.on('disconnected', ()=>{
	console.log('mongoose connection failed');
});

mongoose.connection.on('error', (err)=>{
	console.log('mongoose connection error: '+err);
});


