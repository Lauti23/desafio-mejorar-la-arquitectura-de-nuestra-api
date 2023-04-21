import { Router } from "express";
import { routeLogs } from "../middlewares/routeLogs.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import chatController from "../controllers/chat.controller.js";

export const chatRoute = Router();

chatRoute   
    .get("/", routeLogs, isAuthenticated, chatController.render)