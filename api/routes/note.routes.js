const router = require("express").Router();
const verifyToken = require("../utils/verifyToken.js");
const {
  createNote,
  deleteNote,
  updateNote,
} = require("../controllers/note.controllers.js");
router.post("/create-note", verifyToken, createNote);
router.delete("/delete-note/:id", verifyToken, deleteNote);
router.patch("/update-note/:id", verifyToken, updateNote);
module.exports = router;
