const { categoryModel } = require(`../../model/category`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.category = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const category = await categoryModel.findOne({ _id: id })
    if (category) {
        res.status(200).json({ msg: "get category successfully", data: category })
    } else {
        next(new ApiError(`category with id ${id} not found`, 404))
    }

})