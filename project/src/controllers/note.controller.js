const Note = require("../models/note.models");
const Notes = require("../models/note.models")

const createNotes = async (req , res)=>{
    const {title , content , category , isPinned } = req.body;
    try{
        if(!title || !content || !category){

            return res.status(400).json({success  : false,
                message : "Title and content required field",
                data : null
            })
        }
        const note = new Note(req.body);
        console.log(note);
        
            await note.save();

            res.status(201).json({updated : "Your note is added" , success : true , data : note})
    }
    catch(error) {
        res.status(500).json({error : error.message , success : false})
    }
}
const createNotesBulk = async (req , res)=>{
    try{
        const note = req.body;
        const notes = await Note.insertMany(note);

        res.status(201).json({updated : "Your note is added" , success : true , data : note})
    }
    catch(error){
        res.status(500).json({error : error.message})
    }

}

const getNotes = async(req , res)=>{
    try{
        const note = await Note.find({});
        res.status(200).json({"data" : note , success : true})
    }
    catch(error){
        res.status(500).json({error : error.message , success : false})
    }
}
module.exports = {createNotes,createNotesBulk , getNotes }  
