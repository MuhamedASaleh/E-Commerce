const { subCategoryModel } = require(`../../model/subCategory`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
const slugify = require(`slugify`)
exports.updateSubCategory = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const name = req.body.name
    const subCategory = await subCategoryModel.findByIdAndUpdate({ _id: id }, { name, slug: slugify(name) })
    if (subCategory) {
        res.status(200).json({ msg: "subCategory updated successfully", subCategory })
    } else {
        next(new ApiError(`subCategory with id ${id} not found`, 404))

    }

})