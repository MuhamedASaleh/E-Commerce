const { productModel } = require(`../../model/product`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.allproducts = asyncHandler(async (req, res, next) => {

    const page = req.query.page || 1
    const limit = req.query.limit || 5
    const skip = (page - 1) * limit

    const allproducts = await productModel.find()
        .skip(skip).limit(limit)
        .populate({ path: "category subCategory brand", select: "name -_id" })
    if (allproducts.length) {
        res.status(200).json({ page, products: allproducts.length, data: allproducts })
    } else {
        next(new ApiError(`can't found any product`, 404))
    }
})


