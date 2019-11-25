const db = require('../db-Helpers');
const router = express.Router();

router.get('/', (req, res) => {
    db.findR()
        .then(resource => {
            res.status(200).json({resource});
        })
        .catch(err => {
            res.status(500).json({err});
        });
});

router.post('/', (req, res) => {
    const body = req.body;
    db.insertR(body)
        .then(newR => {
            res.status(200).json({newR})
        })
        .catch(err => {
            res.status(500).json({err})
        })
})

module.exports = router;