import db from "../config.js";
import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import loadSqlQueries from "./utils.js";
import mysql from 'mysql2';
const model = {
    course: async() => {
        try {
            const sqlQuery = await loadSqlQueries('course');
            const [rows, fields] = await db.promise().query(sqlQuery.CourseList);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    courseLesson: async(courseId) => {
        try {
            const sqlQuery = await loadSqlQueries('course');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.GetLesson, [courseId]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
};
export default model;