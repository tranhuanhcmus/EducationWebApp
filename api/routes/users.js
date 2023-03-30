import express from "express";
import controller from "../controllers/users.js";
const router = express.Router();

router.put("/:id", controller.update);

export default router;