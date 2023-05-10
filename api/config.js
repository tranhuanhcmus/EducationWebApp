import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Chou.huog5459",
    database: "ielts",
});

export default db;