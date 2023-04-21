import { productService } from "../services/services.config.js"

const render = (req, res) => {
    res.status(200).render("products.hbs")
}

const renderSell = (req, res) => {
    res.render("sell.hbs")
}

const getById = async (req, res) => {
    let {id} = req.params
    const product = await productService.getById(id)
    res.status(200).send(product)
}

const updateById = async (req, res) => {
    let { id } = req.params
    let { body } = req
    let productUpdated = await productService.update({ _id: id }, body)
    res.status(200).send(productUpdated)
}

const deleteById = async (req, res) => {
    let { id } = req.params
    let deleted = await productService.delete({ _id: id })
    res.status(200).send(deleted)
}

const postProduct = async (req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        stock: req.body.stock
    }
    productService.save(product)
    res.status(201).send(product)
}

export default {
    render,
    renderSell,
    postProduct,
    getById,
    updateById,
    deleteById
}