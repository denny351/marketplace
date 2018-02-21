const express = require('express');
const router = express.Router();

const Item = require('../models/item');

// router.get('/:id')

router.post('/', (req,res) => {
  const item = new Item(req.body);

  item.save((err,doc) => {
		if (err) return res.status(400).send(err);

    return res.status(200).json({ post: true, itemId: doc._id });
  })
})

module.exports = router;


  // server.get('/a', (req, res) => {
  //   return app.render(req, res, '/b', req.query)
  // })