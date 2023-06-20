const { subCategoryModel } = require(`../../model/subCategory`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.allSubCategories = asyncHandler(async (req, res, next) => {

    const page = req.query.page || 1
    const limit = req.query.limit || 5
    const skip = (page - 1) * limit

    const allSubCategory = await subCategoryModel.
        find().skip(skip).limit(limit
        ).populate({ path: "category", select: "name -_id" })
    if (allSubCategory.length) {
        res.status(200).json({ page, subCategories: allSubCategory.length, data: allSubCategory })
    } else {
        next(new ApiError(`can't found any subCategory`, 404))
    }
})


