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

let DeleteUser = async (req, res) => {
  let userId = req.params.userId;
  const [rows, fields] = await pool.execute(`delete from users where id = ?`, [
    userId,
  ]);
  return res.redirect("/");
};

let editUser = async (req, res) => {
  let id = req.params.userId;
  const [user] = await pool.execute(`select * from users where id = ?`, [id]);
  console.log(user);
  return res.render("update.ejs", { dataUser: user[0] });
};
let updateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  const [rows, fields] = await pool.execute(
    `update users set firstName= ?, lastName = ? , email = ?, address=? where id = ? `,
    [firstName, lastName, email, address, id]
  );
  return res.redirect("/");
};
module.exports = {
  getHomePage,
  getDetailPage,
  createNewUser,
  DeleteUser,
  editUser,
  updateUser,
};
