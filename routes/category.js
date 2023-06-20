const app = require(`express`).Router()
const { auth } = require(`../controller/auth/auth`)
const {isAdmin} = require(`../utils/isAdmin`)

const { deleteCategoryValidators, getCategoryValidators, newCategoryValidators, updateCategoryValidators }
    = require(`../validation/categoryValidaion`)

const { newCategory } = require(`../controller/category/createCategory`)
app.post(`/category`, auth, newCategoryValidators, newCategory)

const { allCategories } = require(`../controller/category/allCategory`)
app.get(`/categorys`, auth, allCategories)

const { category } = require(`../controller/category/getCategory`)
app.get(`/category/:id`, auth, getCategoryValidators, category)

const { deleteCategory } = require(`../controller/category/deleteCategory`)
app.delete(`/category/:id`, auth, deleteCategoryValidators, deleteCategory)

const { updateCategory } = require(`../controller/category/updateCategory`)
app.put(`/category/:id`, auth, updateCategoryValidators, updateCategory)

module.exports = app