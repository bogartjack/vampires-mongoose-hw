const express = require('express');
const router = express.Router();
const Vampires = require('../models/vampire.js');

router.get('/', (req, res) => {
	Vampires.find({}, (err, allVamps) =>{
		if(err) console.log(err);
		else {
			res.render('index.ejs', {vamps: allVamps});
		}
	});
});

router.get('/new', (req, res) =>{
	res.render('new.ejs');
});

router.post('/', (req, res) => {
	Vampires.create(req.body, {'$push':{'lives':req.body.loves}}, (err, createdVamp) =>{
		if (err) console.log(err);
		else res.redirect('/vampires');
	});
});

router.get('/:id/edit', (req, res) => {
	Vampires.findById(req.params.id, (err, foundVamp) => {
		res.render('edit.ejs', {vamp: foundVamp});			
	});
});

router.get('/:id', (req, res) => {
	Vampires.findById(req.params.id, (err, foundVamp) => {
		res.render('show.ejs', {vamp: foundVamp});
	});
});

router.delete('/:id', (req, res) => {
	Vampires.findByIdAndRemove(req.params.id, (err, deleteVamp) =>{
		res.redirect('/vampires');
	});
});

router.put('/:id', (req, res) => {
	Vampires.findByIdAndUpdate(req.params.id, req.body, { '$push': {'loves': req.body.loves}}, (err, updateVamp) =>{
		res.redirect('/vampires');

	}); 
});

module.exports = router;
