const { categoryModel } = require(`../../model/category`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.deleteCategory = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const category = await categoryModel.findByIdAndDelete({ _id: id })
    if (category) {
        res.status(200).json({ msg: "category delete successfully" })
    } else {
        next(new ApiError(`category with id ${id} not found`, 404))

    }

})