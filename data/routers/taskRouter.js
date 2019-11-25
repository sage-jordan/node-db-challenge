const db = require('../db-Helpers');
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
        .then(newTask => {
            res.status(200).json({newTask})
        })
        .catch(err => {
            res.status(500).json({err})
        })
})

module.exports = router;