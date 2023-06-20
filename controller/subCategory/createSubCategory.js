const asyncHandler = require(`express-async-handler`)
const slugify = require(`slugify`)
const { subCategoryModel } = require(`../../model/subCategory`)
exports.createCategory = asyncHandler(async (req, res) => {

    if (!req.body.category) req.body.category = req.params.categoryId
    const name = req.body.name
    const category = req.body.category
    const subCategory = await subCategoryModel.create({ name, slug: slugify(name), category })
    res.status(200).json({ msg: `new subCategory added `, data: subCategory })

})