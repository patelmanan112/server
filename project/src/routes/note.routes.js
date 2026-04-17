const express = require("express");
const {createNotes ,createNotesBulk, getNotes}= require("../controllers/note.controller");

const NoteRouter = express.Router();

NoteRouter.get("/test" , (req , res)=>{
res.status(200).json({"message" : "Hello your route not/test is implemented"})

}) 

NoteRouter.post("/" , createNotes);
NoteRouter.post("/bulk" ,createNotesBulk )
NoteRouter.get("/" , getNotes)
module.exports = NoteRouter;