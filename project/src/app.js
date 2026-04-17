const express = require("express");
const NoteRouter = require("./routes/note.routes");
const app = express();
app.use(express.json());

// Routes 

app.use("/api" , NoteRouter)


module.exports = app;