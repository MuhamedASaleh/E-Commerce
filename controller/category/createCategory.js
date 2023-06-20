const asyncHandler = require(`express-async-handler`)
const slugify = require(`slugify`)
const { categoryModel } = require(`../../model/category`)
exports.newCategory = asyncHandler(async (req, res) => {

    const name = req.body.name
    const category = await categoryModel.create({ name, slug: slugify(name) })
    res.status(200).json({ msg: `new category added `, data: category })

})