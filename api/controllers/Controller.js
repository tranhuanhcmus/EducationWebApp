import db from "../config.js";
import model from  "../models/Model.js";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

const controller = {
    //------------------------------------COURSE------------------------------------//
    course: async (req, res) => {
        try{
            const courseList = await model.course();
            res.status(200).json(courseList);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    }, 
    courseLesson: async (req, res) => {
        try{
            const courseId = req.params.id;
            const courseDetail = await model.courseLesson(courseId);
            res.status(200).json(courseDetail);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    myCourse: async (req, res) => {
        try{
            const studentId = req.params.id;
            const courseList = await model.myCourse(studentId);
            res.status(200).json(courseList);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    myCart: async (req, res) => {
        try{
            const studentId = req.params.id;
            const courseList = await model.myCart(studentId);
            res.status(200).json(courseList);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    myClass: async (req, res) => {
        try{
            const teacherId = req.params.id;
            const courseList = await model.myClass(teacherId);
            res.status(200).json(courseList);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    addCourse: async (req, res) => {
        try{
            const data = req.body;
            const result = await model.addCourse(data);
            res.status(200).json(result);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    updateCourse: async (req, res) => {
        try{
            const data = req.body;
            const result = await model.updateCourse(data);
            res.status(200).json(result);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    deleteCourse: async (req, res) => {
        try{
            const CourseID = req.params.id;
            const result = await model.deleteCourse(CourseID);
            res.status(200).json(result);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    //------------------------------------CART------------------------------------//
    addToCart: async (req, res) => {
        try{
            const data = req.body;
            const result = await model.addToCart(data);
            res.status(200).json(result);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    deleteFromCart: async (req, res) => {
        try{
            const data = req.body;
            const result = await model.deleteFromCart(data);
            res.status(200).json(result);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    enrollCourse: async (req, res) => {
        try{
            const data = req.body;
            const result = await model.enrollCourse(data);
            res.status(200).json(result);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    //------------------------------------LESSON------------------------------------//
    addLesson: async (req, res) => {
        try{
            const data = req.body;
            const result = await model.addLesson(data);
            res.status(200).json(result);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    updateLesson: async (req, res) => {
        try{
            const data = req.body;
            const result = await model.updateLesson(data);
            res.status(200).json(result);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    deleteLesson: async (req, res) => {
        try{
            const LessonID = req.params.id;
            const result = await model.deleteLesson(LessonID);
            res.status(200).json(result);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
};

export default controller;