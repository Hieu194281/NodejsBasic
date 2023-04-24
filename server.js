const express = require("express"); // import thư viện express
const app = express(); // tạo app để chạy được
const port = 8080; // tạo cổng

app.get("/", (req, res) => {
  res.send("Hello World! vs Nguyen Trng Hiéu");
});
app.get("/about", (req, res) => {
  res.send("I'm Hiếu ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
