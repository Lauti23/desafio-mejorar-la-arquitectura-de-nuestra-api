import { Product } from "../models/Product.js";
import { Repository } from "./Repository.js";

export class ProductService extends Repository {
    constructor(dao) {
        super(dao, Product.collection);
    }
}