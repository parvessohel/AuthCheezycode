const express = require("express")
const { getNotes, createNote, updateNote, deteteNote } = require("../controllers/noteController")
const auth = require("../middlewares/auth")
const { deleteOne } = require("../models/userModel")
const noteRouter = express.Router()

noteRouter.get("/", auth, getNotes)

noteRouter.post("/", auth, createNote)

noteRouter.delete("/:id", auth, deteteNote)

noteRouter.put("/:id", auth, updateNote)

module.exports = noteRouter