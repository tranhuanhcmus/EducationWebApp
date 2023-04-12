import db from "../config.js";
import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
const controller = {
    login: (req, res) => {
        const { username, password } = req.body;
        let q = "SELECT * FROM ACCOUNT WHERE USERNAME = ?";

        db.query(q, [username], async(err, data) => {
            if (err) return res.status(500).json({ msg: err.message });
            if (data.length == 0)
                return res.status(409).json({ msg: "Account not exists" });

            const checkPass = await bcryptjs.compare(password, data[0].PASSWORD);

            if (!checkPass)
                return res.status(400).json({ msg: "Password is incorrect" });

            const { PASSWORD, ...others } = data[0];

            const token = jwt.sign(others, "secretKey");

            return res
                .status(200)
                .json({ msg: "Login Success", accessToken: token, user: others });
        });
    },
    register: (req, res) => {
        const { name, password, username, phone, email, role } = req.body;

        //check user
        let q = "select * from account where username = ?";
        db.query(q, [username], async(err, data) => {
            if (err) return res.status(500).json({ msg: err.message });
            if (data.length != 0)
                return res.status(409).json({ msg: "Account already exists!" });

            //hash password
            const hashedPass = await bcryptjs.hash(password, 3);

            const id = uuidv4().slice(0, 12);
            let q =
                "INSERT INTO ACCOUNT (`ID`,`USERNAME`,`PASSWORD`,`NAME`,`PHONE`,`MAIL`,`ROLE`) VALUE(?)";

            const value = [id, username, hashedPass, name, phone, email, role];

            db.query(q, [value], (err, data) => {
                if (err) return res.status(500).json({ msg: err.message });
                return res.status(200).json({ msg: "Register Success" });
            });
        });
    },
};
export default controller;