import mongoose from "mongoose";

let Schema = mongoose.Schema

export class Product {
    static get collection() {
        return "Products"
    }
    static get schema() {
        return {
            name: String,
            price: Number,
            image: String,
            stock: Number
        }
    }
}