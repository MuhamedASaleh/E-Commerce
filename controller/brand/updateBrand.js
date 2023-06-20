const { brandModel } = require(`../../model/brand`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
const slugify = require(`slugify`)
exports.updatebrand = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const name = req.body.name
    const brand = await brandModel.findByIdAndUpdate({ _id: id }, { name, slug: slugify(name) })
    if (brand) {
        res.status(200).json({ msg: "brand updated successfully", })
    } else {
        next(new ApiError(`brand with id ${id} not found`, 404))

    }

})