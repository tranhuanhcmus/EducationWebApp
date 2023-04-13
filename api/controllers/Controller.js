import db from "../config.js";
import model from  "../models/Model.js";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

const controller = {
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
    addToCart: async (req, res) => {
        try{
            const data = req.body;
            const result = await model.myClass(data);
            res.status(200).json(result);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    deleteFromCart: async (req, res) => {
        try{
            const data = req.body;
            const result = await model.myClass(data);
            res.status(200).json(result);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    enrollCourse: async (req, res) => {
        try{
            const data = req.body;
            const result = await model.myClass(data);
            res.status(200).json(result);
        }
        catch (error){
            res.status(400).json({msg: error.message});
        }
    },
    

};

export default controller;