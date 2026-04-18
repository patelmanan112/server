const app = require("./app");
const ConnectDb = require("./config/db")


 function StartServer(){
ConnectDb()
app.listen(3000 , ()=>{
    console.log("Server has been started on the port 3000");
    
})

}

StartServer()