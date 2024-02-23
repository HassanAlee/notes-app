const router = require("express").Router();
const verifyToken = require("../utils/verifyToken.js");
const {
  createNote,
  deleteNote,
} = require("../controllers/note.controllers.js");
router.post("/create-note", verifyToken, createNote);
router.delete("/delete-note/:id", verifyToken, deleteNote);
module.exports = router;
