import pool from "../config/connectDB";

let getHomePage = async (req, res) => {
  //logic
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  // let check = await pool.execute("SELECT * FROM `users`");
  // console.log(rows);
  // console.log(check);
  return res.render("index.ejs", { dataUser: rows });
};

let getDetailPage = async (req, res) => {
  let userId = req.params.userId;
  const [rows, fields] = await pool.execute(
    "select * FROM `users` where `id` = ?",
    [userId]
  );
  console.log(rows);
  return res.send(JSON.stringify(rows));
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;
  console.log("checckk req", req.body); // chinh laf cac truong name trong form
  const [rows, fields] = await pool.execute(
    `INSERT INTO users(firstName, lastName, email, address) VALUES (?, ?, ?, ?)`,
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  getDetailPage,
  createNewUser,
};
