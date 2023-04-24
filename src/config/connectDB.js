// get the client
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "22082001",
  database: "nodebasic",
});

// simple query
connection.query("SELECT * FROM `users`", function (err, results, fields) {
  console.log("..check mhsql");
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});

export default connection;
