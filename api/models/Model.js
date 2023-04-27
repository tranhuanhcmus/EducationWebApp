import db from "../config.js";
import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import loadSqlQueries from "./utils.js";
import mysql from 'mysql2';
const model = {
    //------------------------------------COURSE------------------------------------//
    course: async() => {
        try {
            const sqlQuery = await loadSqlQueries('request');
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
            const sqlQuery = await loadSqlQueries('request');
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
            const sqlQuery = await loadSqlQueries('request');
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
            const sqlQuery = await loadSqlQueries('request');
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
            const sqlQuery = await loadSqlQueries('request');
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
    addCourse: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.AddCourse, [data.CourseID, data.Name, data.Category, data.Description, data.Price, data.Img, data.OwnerID]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    deleteCourse: async(CourseId) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.DeleteCourse, [CourseId]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    updateCourse: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.UpdateCourse, [data.CourseID, data.Name, data.Category, data.Description, data.Price, data.Img, data.OwnerID]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    //------------------------------------CART------------------------------------//
    addToCart: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
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
            const sqlQuery = await loadSqlQueries('request');
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
            const sqlQuery = await loadSqlQueries('request');
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
    //------------------------------------LESSON------------------------------------//
    addLesson: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.AddLesson, [data.LessonID, data.CourseID, data.Name, data.Content, data.Video, data.Attachment, data.Duration]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    deleteLesson: async(LessonId) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.DeleteLesson, [LessonId]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    updateLesson: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.UpdateLesson, [data.LessonID, data.CourseID, data.Name, data.Content, data.Video, data.Attachment, data.Duration]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    getForumComment: async(ForumId) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.GetForumComment, [ForumId]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    getCourseComment: async(CourseID) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.GetCourseComment, [CourseID]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    getTestComment: async(TestId) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.GetTestComment, [TestId]);
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