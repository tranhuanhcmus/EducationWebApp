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
    

};

export default controller;