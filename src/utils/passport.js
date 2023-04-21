import passport from "passport";
import local from "passport-local";
import { createHash, isValid } from "./bcrypt.js"
import { userService } from "../services/services.config.js";
import { logger } from "./logger.js";



const LocalStrategy = local.Strategy;

export const initializePassport = () => {
    passport.use("register", new LocalStrategy(
        { passReqToCallback: true }, 
    async (req, username, password, done) => {
        let { name, surname, email, phone } = req.body
        try {
            const user = await userService.getByUser({username})
            if(user) {
                logger.warn("Email en uso", user);
                return done(null, false, { message: "El nombre de usuario ya existe." });
            } 
            const hashedPw = createHash(password)
            const newUser = await userService.save({ name, surname, email, phone, username, password: hashedPw });
            done(null, newUser);
            logger.info("Nuevo usuario registrado:", newUser);
        } catch (error) {
            logger.error(error)
        }
    }))

    passport.use("login", new LocalStrategy(
        { passReqToCallback: true },
        async (req, username, password, done) => {
            try {
                const user = await userService.getByUser({username});
                if(!user) {
                    logger.warn("El email no existe.")
                    return done(null, false);
                } 
                if(!isValid(user, password)) {
                    logger.warn("Contraseña incorrecta.")
                    return done(null, false);
                } 
                logger.info("Usuario logeado", user)
                return done(null, user);
            } catch (error) {
                logger.error(error)
            }
            
        }
    ))
}

passport.serializeUser((user, done) => {
    done(null, user._id)
    console.log("USER _ID", user._id)
})

passport.deserializeUser(async (id, done) => {
    const user = await userService.getById(id)
    done(null, user)
})