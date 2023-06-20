const { subCategoryModel } = require(`../../model/subCategory`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.deleteSubCategory = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const subCategory = await subCategoryModel.findByIdAndDelete({ _id: id })
    if (subCategory) {
        res.status(200).json({ msg: "subCategory delete successfully" })
    } else {
        next(new ApiError(`subCategory with id ${id} not found`, 404))

    }

})