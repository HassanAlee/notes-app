const Note = require("../models/note.model.js");
// create new note
const createNote = async (req, res) => {
  try {
    const note = new Note({ ...req.body, userId: req.user.id });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).send(error);
  }
};
// delete note
const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).send("Note not found");
    }
    if (note.userId != req.user.id) {
      return res.status(401).send("You can only delete your own note");
    }
    const deletedNote = await Note.findByIdAndDelete(id);
    res.status(200).send("Note deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { createNote, deleteNote };
