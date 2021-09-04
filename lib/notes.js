const fs = require('fs');
const path = require('path');

const saveNote = notes => {
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notes, null, 2)
    );
}

function newNote (body, notes) {
    const notes = body;
    notes.push(notes);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({ notes }, null, 2)
    );
    return notes;
  }

module.exports = {
    newNote,
    saveNote,
};