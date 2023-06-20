const { productModel } = require(`../../model/product`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.product = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const product = await productModel.findOne({ _id: id })
        .populate({ path: "category subCategory brand", select: "name -_id" })
    if (product) {
        res.status(200).json({ msg: "get product successfully", data: product })
    } else {
        next(new ApiError(`product with id ${id} not found`, 404))
    }

})