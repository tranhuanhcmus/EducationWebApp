import db from "../config.js";
import model from "../models/Model.js";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import fs from "fs";
const controller = {
    course: async(req, res) => {
        try {
            const courseList = await model.course();
            res.status(200).json(courseList);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    courseLesson: async(req, res) => {
        try {
            const courseId = req.params.id;
            const courseDetail = await model.courseLesson(courseId);
            res.status(200).json(courseDetail);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    myCourse: async(req, res) => {
        try {
            const studentId = req.params.id;
            const courseList = await model.myCourse(studentId);
            res.status(200).json(courseList);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    myCart: async(req, res) => {
        try {
            const studentId = req.params.id;
            const courseList = await model.myCart(studentId);
            res.status(200).json(courseList);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    myClass: async(req, res) => {
        try {
            const teacherId = req.params.id;
            const courseList = await model.myClass(teacherId);
            res.status(200).json(courseList);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },

    addCourse: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.addCourse(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    updateCourse: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.updateCourse(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    deleteCourse: async(req, res) => {
        try {
            const CourseID = req.params.id;
            const result = await model.deleteCourse(CourseID);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    //------------------------------------CART------------------------------------//
    addToCart: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.addToCart(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    deleteFromCart: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.deleteFromCart(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    enrollCourse: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.enrollCourse(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    //------------------------------------LESSON------------------------------------//
    addLesson: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.addLesson(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    updateLesson: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.updateLesson(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    deleteLesson: async(req, res) => {
        try {
            const LessonID = req.params.id;
            const result = await model.deleteLesson(LessonID);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    getImage: (req, res) => {
        try {
            const { name } = req.body;
            const imageData = fs.readFileSync(`database/image/${name}`, "base64");

            // Set the response headers to indicate that we're sending an image
            // res.set("Content-Type", "image/jpg");
            res.set("Content-Length", imageData.length);

            // Send the image data as the response

            res.send(imageData);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    getVideo: async(req, res) => {
        const { name } = req.params;

        const videoPath = `database/video/${name}`;
        const stat = fs.statSync(videoPath);
        const fileSize = stat.size;
        const range = req.headers.range;

        if (range) {
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = end - start + 1;
            const file = fs.createReadStream(videoPath, { start, end });
            const head = {
                "Content-Range": `bytes ${start}-${end}/${fileSize}`,
                "Accept-Ranges": "bytes",
                "Content-Length": chunksize,
                "Content-Type": "video/mp4",
            };

            res.writeHead(206, head);
            file.pipe(res);
        } else {
            const head = {
                "Content-Length": fileSize,
                "Content-Type": "video/mp4",
            };

            res.writeHead(200, head);
            fs.createReadStream(videoPath).pipe(res);
        }
    },
    getForumComment: async(req, res) => {
        try {
            const ForumId = req.params.id;
            const result = await model.deleteLesson(ForumId);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    getCourseComment: async(req, res) => {
        try {
            const CourseID = req.params.id;
            const result = await model.deleteLesson(CourseID);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    getTestComment: async(req, res) => {
        try {
            const TestId = req.params.id;
            const result = await model.deleteLesson(TestId);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
};

export default controller;