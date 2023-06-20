const app = require(`express`).Router()

const { auth } = require(`../controller/auth/auth`)
const { deleteBrandValidators, getBrandValidators, newBrandValidators, updateBrandValidators }
    = require(`../validation/brandValidaion`)

const { newbrand } = require(`../controller/brand/createBrand`)
app.post(`/brand`, auth, newBrandValidators, newbrand)

const { brands } = require(`../controller/brand/brands`)
app.get(`/brand`, auth, brands)

const { brand } = require(`../controller/brand/getBrand`)
app.get(`/brand/:id`, auth, getBrandValidators, brand)

const { deletebrand } = require(`../controller/brand/deleteBrand`)
app.delete(`/brand/:id`, auth, deleteBrandValidators, deletebrand)

const { updatebrand } = require(`../controller/brand/updateBrand`)
app.put(`/brand/:id`, auth, updateBrandValidators, updatebrand)


module.exports = app