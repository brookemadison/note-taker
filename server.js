const express = require('express');
// const path = require("path");
// const fs = require("fs");
const app = express();

const { db } = require('./db/db');

app.get('/api/notes', (req, res) => {
  res.json(db);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
  