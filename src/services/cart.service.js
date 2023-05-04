import { Cart } from "../models/Cart.js";
import { Repository } from "./Repository.js";

export class CartService extends Repository {
    constructor(dao) {
        super(dao, Cart.collection);
    }
}