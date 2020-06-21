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
        .then(list => {
            if (list.length) {
                const tasks = list.map(task => {
                    if(task.completed){
                        task.completed = true;
                        return list;
                    } else {
                        task.completed = false;
                        return list;
                    }
                })
                res.json({tasks: tasks[1]});
            } else {
                res.status(404).json({ message: 'Could not find tasks for given scheme' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks', err: err });
        });
})

router.delete('/:id/tasks', (req, res) => {
    const { id } = req.params;
    db.remove(id)
        .then(count => {
            count
            ? res.status(200).json({ deletedID: id })
            : res.status(404).json({ message: 'invalid ID' })
        })
        .catch(err => {
            res.status(500).json({ err })
        })
})

module.exports = router;