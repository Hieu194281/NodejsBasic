const express = require("express");
import configViewEngine from "./config/viewEngine";
import initWebRoute from "./route/web.js";
import connection from "./config/connectDB";
require("dotenv").config();

// import thư viện express
const app = express(); // tạo app để chạy được
const port = process.env.PORT; // tạo cổng
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
//set up view engine
configViewEngine(app);

//set up route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
