const { productModel } = require(`../../model/product`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.deleteProduct = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const product = await productModel.findByIdAndDelete({ _id: id })
    if (product) {
        res.status(200).json({ msg: "product delete successfully" })
    } else {
        next(new ApiError(`product with id ${id} not found`, 404))

    }

})