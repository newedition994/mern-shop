const express = require('express');
const router = express.Router();

//item Model

const Item = require('../../models/item');

// GET api/items -- GET all items -- access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// POST api/items -- POST  items -- access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
        .then(item => res.json(item));
});


module.exports = router;