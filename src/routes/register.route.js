import { Router } from "express";
import registerController from "../controllers/register.controller.js";
import passport from "passport";
import { routeLogs } from "../middlewares/routeLogs.js";

export const registerRoute = Router();

registerRoute
    .get("/", routeLogs, registerController.render)

    .post("/", routeLogs, passport.authenticate("register", {
        successRedirect: "/",
        failureRedirect: "/register/failed",
        passReqToCallback: true
    }), (req, res) => {})

    .get("/failed", routeLogs, registerController.registerFailed)