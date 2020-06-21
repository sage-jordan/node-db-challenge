const db = require('../db-Helpers');
const express = require('express');
const router = express.Router();

// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     db.findT(id)
//         .then(list => {
//             console.log(list);
//             const tasks = list.map(task => {
//                 if(task.completed){
//                     task.completed = true;
//                     return list;
//                 } else {
//                     task.completed = false;
//                     return list;
//                 }
//             })
//             res.status(200).json({ tasks: tasks[0] });
//         })
//         .catch(err => {
//             res.status(500).json({err});
//         });
// });

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