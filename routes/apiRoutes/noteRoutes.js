const router = require('express').Router();

const savedNotes = require('../../db/db.json');
router.get('/notes', (req, res) => {
  res.json(savedNotes);
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
