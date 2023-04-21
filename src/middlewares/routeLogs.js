import { logger } from "../utils/logger.js";

export const routeLogs = (req, res, next) => {
    logger.info(`RUTA ${req.baseUrl} ${req.url} MÉTODO ${req.method}`)
    next()
}