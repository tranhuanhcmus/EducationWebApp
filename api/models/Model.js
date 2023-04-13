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
    myCourse: async(studentId) => {
        try {
            const sqlQuery = await loadSqlQueries('course');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.GetCourse, [studentId]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    myCart: async(studentId) => {
        try {
            const sqlQuery = await loadSqlQueries('course');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.GetCart, [studentId]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    myClass: async(teacherId) => {
        try {
            const sqlQuery = await loadSqlQueries('course');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.GetClass, [teacherId]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    addToCart: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('course');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.AddToCart, [data.CourseID, data.UID]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    deleteFromCart: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('course');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.DeleteFromCart, [data.CourseID, data.UID]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    enrollCourse: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('course');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.Pay, [data.CourseID, data.UID]);
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