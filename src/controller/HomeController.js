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

module.exports = {
  getHomePage,
  getDetailPage,
};
