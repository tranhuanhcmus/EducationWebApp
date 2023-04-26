import express from "express";
import controller from "../controllers/Controller.js";
const router = express.Router();

router.get("/course", controller.course); //toàn bộ course
router.get("/course/:id", controller.courseLesson); //lessons của 1 course
router.get("/mycourse/:id", controller.myCourse); //my course của student
router.get("/mycart/:id", controller.myCart); //cart của student
router.get("/myclass/:id", controller.myClass); //courses của teacher
router.post("/addtocart", controller.addToCart); //thêm vào giỏ hàng
router.post("/image", controller.getImage); //lấy ảnh từ database
router.put("/enrollcourse", controller.enrollCourse); //thanh toán course đã thêm vào giỏ hàng
router.delete("/deletefromcart", controller.deleteFromCart); //xóa course khỏi giỏ hàng

export default router;