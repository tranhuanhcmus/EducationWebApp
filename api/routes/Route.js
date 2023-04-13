import express from 'express';
import controller from  "../controllers/Controller.js";
const router = express.Router();

router.get('/course', controller.course);
router.get('/course/:id', controller.courseLesson);


export default router;