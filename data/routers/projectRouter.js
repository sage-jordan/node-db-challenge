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

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params;
    console.log(id);
    db.findT(id)
        .then(tasks => {
            if (tasks.length) {
                res.json({tasks});
            } else {
                res.status(404).json({ message: 'Could not find tasks for given scheme' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks', err: err });
        });
})

module.exports = router;