const { categoryModel } = require(`../../model/category`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
const slugify = require(`slugify`)
exports.updateCategory = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const name = req.body.name
    const category = await categoryModel.findByIdAndUpdate({ _id: id }, { name, slug: slugify(name) })
    if (category) {
        res.status(200).json({ msg: "category updated successfully", })
    } else {
        next(new ApiError(`category with id ${id} not found`, 404))

    }

})