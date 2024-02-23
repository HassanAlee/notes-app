const router = require("express").Router();
const verifyToken = require("../utils/verifyToken.js");
const { createNote } = require("../controllers/note.controllers.js");
router.post("/create-note", verifyToken, createNote);
module.exports = router;
