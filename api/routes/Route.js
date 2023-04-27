import express from "express";
import controller from "../controllers/Controller.js";
const router = express.Router();

//------------------------------------COURSE------------------------------------//
router.get("/course", controller.course); //toàn bộ course
router.get("/course/:id", controller.courseLesson); //lessons của 1 course
router.get("/mycourse/:id", controller.myCourse); //my course của student
router.get("/mycart/:id", controller.myCart); //cart của student
router.get("/myclass/:id", controller.myClass); //courses của teacher
router.post("/addcourse", controller.addCourse); //thêm course
router.put("/updatecourse", controller.updateCourse); //cập nhật course
router.delete("/deletecourse/:id", controller.deleteCourse); //xóa course
//-------------------------------------CART-------------------------------------//
router.post("/addtocart", controller.addToCart); //thêm vào giỏ hàng
router.put("/enrollcourse", controller.enrollCourse); //thanh toán course đã thêm vào giỏ hàng
router.delete("/deletefromcart", controller.deleteFromCart); //xóa course khỏi giỏ hàng
//------------------------------------LESSON------------------------------------//
router.post("/addlesson", controller.addLesson); //thêm lesson
router.put("/updatelesson", controller.updateLesson); //cập nhật lesson
router.delete("/deletelesson/:id", controller.deleteLesson); //xóa lesson
router.post("/image", controller.getImage); //lấy ảnh từ database
router.get("/video/:name", controller.getVideo); //lấy ảnh từ database
//------------------------------------COMMENT------------------------------------//
router.get("/fcmt/:id", controller.myCart); //cart của student
router.get("/ccmt/:id", controller.myCart); //cart của student
router.get("/tcmt/:id", controller.myCart); //cart của student


export default router;