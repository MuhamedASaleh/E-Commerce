const { userModel } = require(`../../model/user`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.user = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const user = await userModel.findOne({ _id: id })
    if (user) {
        res.status(200).json({ msg: "get user successfully", data: user })
    } else {
        next(new ApiError(`user with id ${id} not found`, 404))
    }

})