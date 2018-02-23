const express = require('express');
const router = express.Router();

const Item = require('../../models/item');

//POST ITEM
router.post('/', (req, res) => {
	const item = new Item(req.body);

	item.save((err, doc) => {
		if (err) return res.status(400).send(err);
		res.status(200).json({
			post: true,
			itemId: doc._id
		});
	});
});

//GET ALL ITEMS WITH QUERIES
router.get('/all', (req, res) => {
	let skip = parseInt(req.query.skip);
	let limit = parseInt(req.query.limit);
	let order = req.query.order;

	Item.find({})
		.skip(skip)
		.sort({ _id: order })
		.limit(limit)
		.exec((err, doc) => {
			if (err) return res.status(400).send(err);
			res.send(doc);
		});
});

//GET SINGLE ITEM BY ID
router.get('/:id', (req, res) => {
	let id = req.params.id;

	Item.findById(id, (err, doc) => {
		if (err) return res.status(400).send(err);
		res.send(doc);
	});
});

// UPDATE ITEM
router.post('/update', (req, res) => {
	Item.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
		if (err) return res.status(400).send(err);
		res.json({
			success: true,
			doc
		});
	});
});

// DELETE ITEM
router.delete('/delete/:id', (req, res) => {
	let id = req.params.id;
	Item.findByIdAndRemove(id, (err, doc) => {
		if (err) return res.status(400).send(err);
		res.json(true);
	});
});

module.exports = router;