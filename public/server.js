const express = require('express');
// const path = require("path");
// const fs = require("fs");
const PORT = process.env.PORT || 3001;
const app = express();

const { notes } = require('./db/db');

app.get('/api/notes', (req, res) => {
  let results = notes;
  console.log(req.query)
  res.json(results);
});


app.post('/api/notes', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
