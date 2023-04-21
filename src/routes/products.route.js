import { Router } from "express";
import { routeLogs } from "../middlewares/routeLogs.js";
import productsController from "../controllers/products.controller.js";

export const productsRoute = Router();

productsRoute
    .get("/", routeLogs, productsController.render)

    .get("/:id", routeLogs, productsController.getById)

    .put("/:id", routeLogs, productsController.updateById)

    .delete("/:id", routeLogs, productsController.deleteById)

    .get("/sell", routeLogs, productsController.renderSell)

    .post("/sell", routeLogs, productsController.postProduct)

