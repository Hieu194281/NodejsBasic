// get the client
import mysql from "mysql2/promise";

// create the connection to database
console.log("Creating connection pool..");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "22082001",
  database: "nodebasic",
});

// simple query

export default pool;
