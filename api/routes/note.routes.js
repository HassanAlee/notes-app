const router = require("express").Router();
const verifyToken = require("../utils/verifyToken.js");
const {
  createNote,
  deleteNote,
  updateNote,
  getNotes,
} = require("../controllers/note.controllers.js");
router.post("/create-note", verifyToken, createNote);
router.delete("/delete-note/:id", verifyToken, deleteNote);
router.patch("/update-note/:id", verifyToken, updateNote);
router.get("/get-notes", verifyToken, getNotes);
module.exports = router;
