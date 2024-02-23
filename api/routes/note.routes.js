const router = require("express").Router();
const { createNote } = require("../controllers/note.controllers.js");
router.post("/create-note", createNote);
module.exports = router;
