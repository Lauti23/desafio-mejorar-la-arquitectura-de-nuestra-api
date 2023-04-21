import supertest from "supertest";
import { expect } from "chai";

let example = {
    name: "Camiseta",
    price: 10000,
    image: "camiseta.com.ar",
    stock: 5
}

let exampleId = "6442a653cae0a63b41398b9c"

const request = supertest("http://localhost:8080");

describe("API test", () => {
    describe("GET", () => {
        it("La petición a /products debería retornar status 200", async () => {
            let res = await request.get("/products")
            expect(res.status).to.equal(200)
        })
    })

    describe("POST /products/sell", () => {
        it("Al postear un producto debería retornar status 201 y guardar el producto", async () => {
            let res = await request.post("/products/sell").send(example)
            expect(res.status).to.equal(201)
            const resBody = res.body
            expect(resBody).to.include.keys("name", "price", "image", "stock")
        })
    })

    describe("GET BY ID /products/:id", () => {
        it("Deberia retornar status 200 y el producto buscado", async () => {
            let res = await request.get(`/products/${exampleId}`)
            expect(res.status).to.equal(200)
            const resBody = res.body
            expect(resBody).to.include.keys("name", "price", "image", "stock")
        })
    })

    describe("PUT /products/:id", () => {
        it("Debería retornar status 200 y el producto modificado", async () => {
            let res = await request.put(`/products/${exampleId}`)
            expect(res.status).to.equal(200)
        })
    })

    describe("DELETE /products/:id", () => {
        it("Debería retornar status 200 y eliminar el producto", async () => {
            let res = await request.delete(`/products/${exampleId}`)
            expect(res.status).to.equal(200)
        })
    })
})