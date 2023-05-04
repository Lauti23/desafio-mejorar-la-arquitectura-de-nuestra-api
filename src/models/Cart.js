import mongoose from "mongoose";
import { Product } from "./Product.js";

let Schema = mongoose.Schema

export class Cart {
    static get collection() {
        return "Carts"
    }
    static get schema() {
        return {
            owner: {
                type: String,
                unique: true,
                required: true
            },
            items: {
                type: [Product.schema],
                default: undefined
            },
            price: {
                type: Number,
                default: 0
            }
        }
    }
}