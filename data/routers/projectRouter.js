const db = require('../db-Helpers');
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
    db.insertP(body)
        .then(newProj => {
            res.status(200).json({newProj})
        })
        .catch(err => {
            res.status(500).json({err})
        })
})

module.exports = router;