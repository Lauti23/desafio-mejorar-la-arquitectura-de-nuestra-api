import { Message } from "../models/Message.js";
import { Repository } from "./Repository.js";

export class MessageService extends Repository {
    constructor(dao) {
        super(dao, Message.collection);
    }
}