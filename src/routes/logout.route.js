import { Router } from "express";
import { routeLogs } from "../middlewares/routeLogs.js";

export const logoutRoute = Router();

logoutRoute.get("/", routeLogs, (req, res) => {
    req.logout((err) => {
        if(err) return next(err)
        console.log("Logged Out")
    });
    res.redirect("/login")
})