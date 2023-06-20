const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
const { categoryModel } = require(`../../model/category`)

exports.allCategories = asyncHandler(async (req, res, next) => {

    const page = req.query.page || 1
    const limit = req.query.limit || 5
    const skip = (page - 1) * limit

    const allCategory = await categoryModel.find().skip(skip).limit(limit)
    if (allCategory.length) {
        res.status(200).json({ page, categories: allCategory.length, data: allCategory })
    } else {
        next(new ApiError(`can't found any category`, 404))
    }
})


