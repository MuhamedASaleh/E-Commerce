const { brandModel } = require(`../../model/brand`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.brand = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const brand = await brandModel.findOne({ _id: id })
    if (brand) {
        res.status(200).json({ msg: "get brand successfully", data: brand })
    } else {
        next(new ApiError(`brand with id ${id} not found`, 404))
    }

})