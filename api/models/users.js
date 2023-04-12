import db from "../config.js";
import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
const model = {
    update: (req, res) => {
        const id = req.params;
        const { name, phone, email, avatar } = req.body;
        res.send({ data: req.body, id: req.params });
    },
};
export default model;