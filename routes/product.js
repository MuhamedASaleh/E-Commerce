const app = require(`express`).Router()
const { auth } = require(`../controller/auth/auth`)

const { deleteProductValidators, getProductValidators, newProductValidators, updateProductValidators }
    = require(`../validation/productValidaion`)

const { newProduct } = require(`../controller/product/createProduct`)
app.post(`/product`, auth, newProductValidators, newProduct)

const { allproducts } = require(`../controller/product/allProduct`)
app.get(`/product`, auth, allproducts)

const { product } = require(`../controller/product/getProduct`)
app.get(`/product/:id`, auth, getProductValidators, product)

const { deleteProduct } = require(`../controller/product/deleteProduct`)
app.delete(`/product/:id`, auth, deleteProductValidators, deleteProduct)

const { updateProduct } = require(`../controller/product/updateProduct`)
app.put(`/product/:id`, auth, updateProductValidators, updateProduct)

module.exports = app