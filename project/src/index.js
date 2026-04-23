require("dotenv").config(); // ✅ MUST BE FIRST LINE

const app = require("./app");
const ConnectDb = require("./config/db");

const port = process.env.PORT || 3000;

async function StartServer() {
  await ConnectDb(); // ✅ wait for DB

  app.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
  });
}

StartServer();