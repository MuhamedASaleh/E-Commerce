const { brandModel } = require(`../../model/brand`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.brands = asyncHandler(async (req, res, next) => {

    const page = req.query.page || 1
    const limit = req.query.limit || 5
    const skip = (page - 1) * limit

    const brand = await brandModel.find().skip(skip).limit(limit)
    if (brand.length) {
        res.status(200).json({ page, brands: brand.length, data: brand })
    } else {
        next(new ApiError(`can't found any brand`, 404))
    }
})


