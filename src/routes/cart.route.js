import { Router } from "express";
import { routeLogs } from "../middlewares/routeLogs.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import cartController from "../controllers/cart.controller.js";

export const cartRouter = Router();

cartRouter.get("/", routeLogs, isAuthenticated, cartController.render)