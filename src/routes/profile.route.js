import { Router } from "express";
import { render } from "../controllers/profile.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js"
import { routeLogs } from "../middlewares/routeLogs.js";

export const profileRoute = Router();

profileRoute.get("/", routeLogs, isAuthenticated, render)