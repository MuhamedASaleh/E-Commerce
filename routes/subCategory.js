const app = require(`express`).Router()
const { auth } = require(`../controller/auth/auth`)

const { deleteSubCategoryValidators, getSubCategoryValidators, newSubCategoryValidators, updateSubCategoryValidators }
    = require(`../validation/subCategoryValidaion`)

const { createCategory } = require(`../controller/subCategory/createSubCategory`)
app.post(`/subCategory`, auth, newSubCategoryValidators, createCategory)

const { allSubCategories } = require(`../controller/subCategory/getAllSubCategory`)
app.get(`/subCategory`, auth, allSubCategories)

const { SubCategory } = require(`../controller/subCategory/getSpecificSubCategory`)
app.get(`/subCategory/:id`, auth, getSubCategoryValidators, SubCategory)

const { deleteSubCategory } = require(`../controller/subCategory/deleteSubCategory`)
app.delete(`/subCategory/:id`, auth, deleteSubCategoryValidators, deleteSubCategory)

const { updateSubCategory } = require(`../controller/subCategory/updateSubCategory`)
app.put(`/subCategory/:id`, auth, updateSubCategoryValidators, updateSubCategory)

module.exports = app