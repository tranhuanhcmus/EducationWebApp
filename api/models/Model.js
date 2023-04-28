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
    rateCourse: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.Rate, [data.CourseID, data.UID, data.Point]);
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
    //------------------------------------COMMENT------------------------------------//
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
    addForumComment: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.AddForumComment, [data.CmtID, data.FID, data.ID, data.Content]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    addCourseComment: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.AddCourseComment, [data.CmtID, data.CID, data.ID, data.Content]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    addTestComment: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.AddTestComment, [data.CmtID, data.TID, data.ID, data.Content]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    updateForumComment: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.UpdateForumComment, [data.CmtID, data.FID, data.ID, data.Content]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    updateCourseComment: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.UpdateCourseComment, [data.CmtID, data.CID, data.ID, data.Content]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    updateTestComment: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.UpdateTestComment, [data.CmtID, data.TID, data.ID, data.Content]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    deleteForumComment: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.DeleteForumComment, [data.CmtID, data.FID, data.ID]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    deleteCourseComment: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.DeleteCourseComment, [data.CmtID, data.CID, data.ID]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    deleteTestComment: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.DeleteTestComment, [data.CmtID, data.TID, data.ID]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    //------------------------------------NOTE------------------------------------//
    getNote: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.GetNote, [data.LID, data.ID]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    addNote: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.AddNote, [data.NID, data.LID, data.ID, data.Content]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    updateNote: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.UpdateNote, [data.NID, data.LID, data.ID, data.Content]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    deleteNote: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.DeleteNote, [data.NID, data.LID, data.ID]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    //------------------------------------QUESTION------------------------------------//
    lessonQuiz: async(lessonID) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.GetQuestion, [lessonID]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    addQuestion: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.AddQuestion, [data.QID, data.LID, data.Content, data.Img, data.Audio, data.Solution]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    updateQuestion: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.UpdateQuestion, [data.QID, data.LID, data.Content, data.Img, data.Audio, data.Solution]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    deleteQuestion: async(questionID) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.DeleteQuestion, [questionID]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    
    //-------------------------------------FORUM--------------------------------------//
    forumList: async() => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.ForumList);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    specificForum: async(str) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.SpecificForum, [forumstrId]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    addForum: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.AddForum, [data.FID, data.ID, data.Title, data.Content, data.Img]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    updateForum: async(data) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.UpdateForum, [data.FID, data.ID, data.Title, data.Content, data.Img]);
            console.log(rows);
            return rows[0];
        }   
        catch (error){
            console.log(error.message);
            return error.message;
        }
    },
    deleteForum: async(forumID) => {
        try {
            const sqlQuery = await loadSqlQueries('request');
            const [rows, fields] = await db.promise()
                                        .query(sqlQuery.DeleteForum, [forumID]);
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