import mysql from "mysql2";

const db = mysql.createConnection({
  // host: "localhost",
  // user: "root",
  // password: "123456",
  // database: "ielts",
  host: "localhost",
  user: "root",
  password: "0977274002",
  database: "ielts",
});

export default db;
