import pool from "../config/connectDB";

let getAllUser = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  return res.status(200).json({
    message: "success",
    data: rows,
  });
};

let getUserbyId = async (req, res) => {
  let userId = req.params.id;
  const [rows, fields] = await pool.execute(
    "select * FROM users where id = ?",
    [userId]
  );
  return res.status(200).json({
    message: "success",
    data: rows,
  });
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;
  if (!firstName || !lastName || !email || !address) {
    return res.status(200).json({
      message: "missing required params",
    });
  }

  const [rows, fields] = await pool.execute(
    `INSERT INTO users(firstName, lastName, email, address) VALUES (?, ?, ?, ?)`,
    [firstName, lastName, email, address]
  );
  return res.status(200).json({
    message: "success",
  });
};

let updateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  const [rows, fields] = await pool.execute(
    `update users set firstName= ?, lastName = ? , email = ?, address=? where id = ? `,
    [firstName, lastName, email, address, id]
  );
  if (!firstName || !lastName || !email || !address || !id) {
    return res.status(200).json({
      message: "missing required params",
    });
  }
  res.status(200).json({
    message: "success",
  });
};
let deleteUser = async (req, res) => {
  let userId = req.params.id;
  if (!userId) {
    return res.status(200).json({
      message: "missing required params",
    });
  }
  const [rows, fields] = await pool.execute(`delete from users where id = ?`, [
    userId,
  ]);
  res.status(200).json({
    message: "success",
  });
};
module.exports = {
  getAllUser,
  getUserbyId,
  createNewUser,
  updateUser,
  deleteUser,
};
