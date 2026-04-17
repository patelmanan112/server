const mongoose = require("mongoose");
const NotesSchema = new mongoose.Schema({
    title : {
        type : String,
        requied : true,

    },
    content : {
          type : String,
        requied : true,
    },
   category :  {
    type : String,
    enum  : ["work" , "personal" , "study"],
    default : "work"
    },
   isPinned :  {
    type : Boolean,
    default : false
    },
  

})

// Model 
const Note = mongoose.model("Notes" , NotesSchema);
module.exports = Note;