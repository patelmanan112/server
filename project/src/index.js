const dotenv = require("dotenv")
const app = require("./app");
const ConnectDb = require("./config/db")
const port = process.env.PORT || 3000
 function StartServer(){
ConnectDb()
app.listen(port , ()=>{
    console.log("Server has been started on the port 3000");
    
})

}

StartServer()