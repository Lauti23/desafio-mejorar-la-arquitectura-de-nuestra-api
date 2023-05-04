import mongoose from "mongoose";

let Schema = mongoose.Schema

export class User {
    static get collection() {
        return "Users";
    }

    static get schema() {
        return {
            name: {
                type: String,
            },
            surname: {
                type: String,
            },
            email: {
                type: String,
                unique: true,
            },
            image: String,
            phone: String,
            cart: {
                type: String,
            },
            username: {
                type: String,
                unique: true,
            },
            password: String
        }
    }
}