import express from "express";
import { momo, payment, result } from "../controllers/Momo.js";

const momoRouter = express.Router();

momoRouter.post("/", momo);
momoRouter.post("/result", result);
momoRouter.get("/:userId/success", payment);

export default momoRouter;
