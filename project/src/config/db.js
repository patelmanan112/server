const mongoose = require("mongoose");

async function ConnectDb() {
    mongoose.connect("mongodb://localhost:27017/Notesapp")
    .then(() => console.log("Connect to the mongodb server")
    )
    .catch((err) => console.log(err.message)
    )
}

module.exports = ConnectDb;