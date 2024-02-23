const Note = require("../models/note.model.js");
// create new note
const createNote = async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { createNote };
