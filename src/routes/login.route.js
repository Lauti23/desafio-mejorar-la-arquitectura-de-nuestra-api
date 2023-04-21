import { Router } from "express";
import passport from "passport";
import loginController from "../controllers/login.controller.js";
import { routeLogs } from "../middlewares/routeLogs.js";

export const loginRoute = Router();

loginRoute
    .get("/", routeLogs, loginController.render)

    .post("/", routeLogs, passport.authenticate("login", { 
        successRedirect: "/",
        failureRedirect: "/login",
        passReqToCallback: true }
    ), (req, res) => {
        
    })