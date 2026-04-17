const express = require("express");
const createNotes = require("../controllers/note.controller");
 // 
const NoteRouter = express.Router();

NoteRouter.get("/test" , (req , res)=>{
res.status(200).json({"message" : "Hello your route not/test is implemented"})

}) 

NoteRouter.post("/create" , createNotes);
module.exports = NoteRouter;