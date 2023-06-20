const { productModel } = require(`../../model/product`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
const slugify = require(`slugify`)
exports.updateProduct = asyncHandler(async (req, res, next) => {

    if (req.body.title) {
        req.body.slug = slugify(req.body.title)
    }

    const id = req.params.id
    const product = await productModel.findByIdAndUpdate({ _id: id }, req.body)
    if (product) {
        res.status(200).json({ msg: "product updated successfully", })
    } else {
        next(new ApiError(`product with id ${id} not found`, 404))

    }

})