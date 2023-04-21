import dotenv from "dotenv";
dotenv.config();

import express from "express";
import handlebars from "express-handlebars";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";

import { initializePassport } from "./utils/passport.js";
import { connectionToMongo } from "./middlewares/connection.js";

//RUTAS
import { productsRoute } from "./routes/products.route.js";
import { loginRoute } from "./routes/login.route.js";
import { registerRoute } from "./routes/register.route.js";
import { profileRoute } from "./routes/profile.route.js";
import { logoutRoute } from "./routes/logout.route.js";
import { logger } from "./utils/logger.js";
import { indexRoute } from "./routes/index.route.js";
import { cartRouter } from "./routes/cart.route.js";
import { chatRoute } from "./routes/chat.route.js";
import { Server } from "socket.io";

import { messageService } from "./services/services.config.js";
import { productService } from "./services/services.config.js";

const app = express()
const PORT = 8080 || process.env.PORT
connectionToMongo();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("src/public"));
app.use(session({
    store: MongoStore.create({mongoUrl: process.env.MONGO_SESSION_URL}),
    key: process.env.KEY,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000
    }
}))
initializePassport();
app.use(passport.initialize());
app.use(passport.session());


app.engine("hbs", handlebars.engine({ extname: ".hbs", defaultLayout: "main.hbs" }))
app.set("view engine", "hbs");
app.set("views", "src/public/views")

app.use("/", indexRoute)
app.use("/carts", cartRouter)
app.use("/products", productsRoute)
app.use("/login", loginRoute)
app.use("/register", registerRoute)
app.use("/profile", profileRoute)
app.use("/logout", logoutRoute);
app.use("/chat", chatRoute)

const server = app.listen(8080, () => logger.info(`Server running on port ${PORT}, process: ${process.pid}`))

const io = new Server(server)
    
io.on("connection", async (socket) => {
    console.log(`Nuevo usuario se ha conectado.`)
    const getData = async () => {
        let products = await productService.get()
        let messages = await messageService.get()
        socket.emit("productsData", products)
        socket.emit("messagesData", messages)
    }
    getData();

    const updateItems = async () => {
        let data = await productService.get();
        io.emit("productsData", data);
    }

    socket.on("createMessage", async (data) => {
        let message = await messageService.save(data);
        io.emit("newMessage", message);
    })

    socket.on("createProduct", async (data) => {
        let product = await productService.save(data)
        io.emit("newProduct", product)
    })

    socket.on("deleteProduct", async (data) => {
        let product = await productService.get({data})
        let id = product._id
        await productService.delete(id)
        updateItems();
    })
})
