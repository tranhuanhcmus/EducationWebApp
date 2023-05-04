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
            const courseID = req.params.id;
            const courseDetail = await model.courseLesson(courseID);
            res.status(200).json(courseDetail);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    myCourse: async(req, res) => {
        try {
            const studentID = req.params.id;
            const courseList = await model.myCourse(studentID);
            res.status(200).json(courseList);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    myCart: async(req, res) => {
        try {
            const studentID = req.params.id;
            const courseList = await model.myCart(studentID);
            res.status(200).json(courseList);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    myClass: async(req, res) => {
        try {
            const teacherID = req.params.id;
            const courseList = await model.myClass(teacherID);
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
            const courseID = req.params.id;
            const result = await model.deleteCourse(courseID);
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
    rateCourse: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.rateCourse(data);
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
            const lessonID = req.params.id;
            const result = await model.deleteLesson(lessonID);
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
    //------------------------------------COMMENT------------------------------------//
    getForumComment: async(req, res) => {
        try {
            const forumID = req.params.id;
            const result = await model.getForumComment(forumID);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    getCourseComment: async(req, res) => {
        try {
            const courseID = req.params.id;
            const result = await model.getCourseComment(courseID);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    getTestComment: async(req, res) => {
        try {
            const testID = req.params.id;
            const result = await model.getTestComment(testID);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    addForumComment: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.addForumComment(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    addCourseComment: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.addCourseComment(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    addTestComment: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.addTestComment(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    updateForumComment: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.updateForumComment(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    updateCourseComment: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.updateCourseComment(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    updateTestComment: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.updateTestComment(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    deleteForumComment: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.deleteForumComment(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    deleteCourseComment: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.deleteCourseComment(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    deleteTestComment: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.deleteTestComment(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    //------------------------------------NOTE------------------------------------//
    getNote: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.getNote(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    addNote: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.addNote(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    updateNote: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.updateNote(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    deleteNote: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.deleteNote(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    //------------------------------------QUESTION------------------------------------//
    lessonQuiz: async(req, res) => {
        try {
            const lessonID = req.params.id;
            const result = await model.lessonQuiz(lessonID);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    addQuestion: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.addQuestion(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    updateQuestion: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.updateQuestion(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    deleteQuestion: async(req, res) => {
        try {
            const questionID = req.params.id;
            const result = await model.deleteQuestion(questionID);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    //-------------------------------------FORUM--------------------------------------//
    forumList: async(req, res) => {
        try {
            const result = await model.forumList();
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    specificForum: async(req, res) => {
        try {
            const str = req.params.id;
            const result = await model.specificForum(str);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    addForum: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.addForum(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    updateForum: async(req, res) => {
        try {
            const data = req.body;
            const result = await model.updateForum(data);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    deleteForum: async(req, res) => {
        try {
            const forumID = req.params.id;
            const result = await model.deleteForum(forumID);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },

};

export default controller;