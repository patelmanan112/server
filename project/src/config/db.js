const mongoose = require("mongoose");

async function ConnectDb() {
   mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connect to the mongodb server")
    )
    .catch((err) => console.log("MONGO_URI:", process.env.MONGO_URI)
    )
}

module.exports = ConnectDb;