import { Router } from "express";
import { routeLogs } from "../middlewares/routeLogs.js";
import indexController from "../controllers/index.controller.js";

export const indexRoute = Router();

indexRoute
    .get("/", routeLogs, indexController.render)