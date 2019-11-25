const db = require('../db-Helpers');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db.findT()
        .then(tasks => {
            res.status(200).json({tasks});
        })
        .catch(err => {
            res.status(500).json({err});
        });
});

router.post('/', (req, res) => {
    const body = req.body;
    db.insertT(body)
        .then(message => {
            res.status(200).json({message})
        })
        .catch(err => {
            res.status(500).json({err})
        })
})

module.exports = router;