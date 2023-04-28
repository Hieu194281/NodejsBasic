const express = require("express");
import configViewEngine from "./config/viewEngine";
import initWebRoute from "./route/web.js";
import initApiRoute from "./route/api";
var morgan = require("morgan");
// import connection from "./config/connectDB";
require("dotenv").config();

// import thư viện express
const app = express(); // tạo app để chạy được
const port = process.env.PORT; // tạo cổng
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
//set up view engine
configViewEngine(app);
app.use(morgan("combined"));

app.use((req, res, next) => {
  console.log("run to logging: ");
  console.log(req.header);
  next();
});

//set up route
initWebRoute(app);
initApiRoute(app);

//handle 404 not found
app.use((req, res) => {
  return res.render("404.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
