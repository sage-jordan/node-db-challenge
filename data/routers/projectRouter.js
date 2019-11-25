const db = require('../db-Helpers');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db.findP()
        .then(projects => {
            res.status(200).json({projects});
        })
        .catch(err => {
            res.status(500).json({err});
        });
});

router.post('/', (req, res) => {
    const body = req.body;
    console.log(req.body);
    db.insertP(body)
        .then(message => {
            res.status(200).json({ message })
        })
        .catch(err => {
            res.status(500).json({err})
        })
})

module.exports = router;