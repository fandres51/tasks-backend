const express = require('express');

const router = express.Router();

routerd.get('/', (req, res) => {
    const classes = [];
    //const classes = traerDeBase();
    //res.json(classes);
});

routerd.get('/:id', (req, res) => {
    const { id } = req.params;
    //const class = traerDeBase(id);
    //res.json(class);
});

module.exports = router;
