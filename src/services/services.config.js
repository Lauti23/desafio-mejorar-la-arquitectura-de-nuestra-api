import { MongoDAO } from "../DAO's/mongo.dao.js";
import { UserService } from "./user.service.js";
import { ProductService } from "./product.service.js";
import { MessageService } from "./message.service.js";
import config from "../utils/config.js";
import { UsersDaoArray } from "../DAO's/array.dao.js";


let dao 
switch (config.app.persistance) {
    case "MONGO":
        dao = new MongoDAO(config.mongo)
        break;

    case "ARRAY":
        dao = new UsersDaoArray()
        break;
    default:
        break;
}

export const userService = new UserService(dao);
export const productService = new ProductService(dao);
export const messageService = new MessageService(dao);