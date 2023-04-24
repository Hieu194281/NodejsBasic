const express = require("express");
import configViewEngine from "./config/viewEngine";
// import thư viện express
const app = express(); // tạo app để chạy được
const port = 8080; // tạo cổng

configViewEngine(app);
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/about", (req, res) => {
  res.send("I'm Hiếu ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});