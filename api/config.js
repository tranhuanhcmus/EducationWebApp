import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0977274002",
  database: "ielts",
});

export default db;
