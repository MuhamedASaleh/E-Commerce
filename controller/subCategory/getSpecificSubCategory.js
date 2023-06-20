const { SubCategoryModel } = require(`../../model/subCategory`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.SubCategory = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const SubCategory = await SubCategoryModel.findOne({ _id: id })
    if (SubCategory) {
        res.status(200).json({ msg: "get SubCategory successfully", data: SubCategory })
    } else {
        next(new ApiError(`SubCategory with id ${id} not found`, 404))
    }

})