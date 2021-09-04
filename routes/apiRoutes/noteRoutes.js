const router = require('express').Router();

const storedNotes = require('../../db/db.json');
router.get('/notes', (req, res) => {
  res.json(storedNotes);
});

router.get('/notes', (req, res) => {
  let results = notes;
  console.log(req.query)
  res.json(results);
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
  });

module.exports = router;
