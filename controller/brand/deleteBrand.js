const { brandModel } = require(`../../model/brand`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.deletebrand = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const brand = await brandModel.findByIdAndDelete({ _id: id })
    if (brand) {
        res.status(200).json({ msg: "brand delete successfully" })
    } else {
        next(new ApiError(`brand with id ${id} not found`, 404))

    }

})