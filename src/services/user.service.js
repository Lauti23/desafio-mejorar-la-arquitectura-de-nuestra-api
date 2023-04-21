import { User } from "../models/User.js";
import { Repository } from "./Repository.js";

export class UserService extends Repository {
    constructor(dao) {
        super(dao, User.collection);
    }
}