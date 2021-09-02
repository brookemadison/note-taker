const express = require('express');
// const path = require("path");
// const fs = require("fs");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

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

//route to index.html (home page)
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

//route to notes.html (note page)
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

//wildcard route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
