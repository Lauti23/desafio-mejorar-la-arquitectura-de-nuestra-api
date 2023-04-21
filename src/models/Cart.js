import mongoose from "mongoose";
import { Product } from "./Product.js";

let Schema = mongoose.Schema

export class Cart {
    static get collection() {
        return "Carts"
    }
    static get schema() {
        return {
            owner: String,
            items: [Product.schema],
            price: String,
        }
    }
}