import passport from "passport";
import local from "passport-local";
import { createHash, isValid } from "./bcrypt.js"
import { userService } from "../services/services.config.js";
import { cartService } from "../services/services.config.js";
import { logger } from "./logger.js";



const LocalStrategy = local.Strategy;

export const initializePassport = () => {
    passport.use("register", new LocalStrategy(
        { passReqToCallback: true }, 
    async (req, username, password, done) => {
        let { name, surname, email, phone } = req.body
        let image = req.file.filename
        console.log(image)
        try {
            const user = await userService.getByUser({username})
            if(user) {
                logger.warn("El nombre de usuario ya existe", user);
                return done(null, false, { message: "El nombre de usuario ya existe." });
            } 
            const hashedPw = createHash(password)
            const newUser = await userService.save({ name, surname, email, phone, image, username, password: hashedPw });
            const userCart = await cartService.save({owner: username})
            console.log("CARRITO", userCart)
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
                    logger.warn("El usuario no existe.")
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

passport.serializeUser(async (user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    const user = await userService.getById(id)
    done(null, user)
})