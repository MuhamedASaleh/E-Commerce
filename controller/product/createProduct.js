const asyncHandler = require(`express-async-handler`)
const slugify = require(`slugify`)
const { productModel } = require(`../../model/product`)
exports.newProduct = asyncHandler(async (req, res) => {

    req.body.slug = slugify(req.body.title)
    const product = await productModel.create(req.body)
    res.status(200).json({ msg: `new product added `, data: product })

})