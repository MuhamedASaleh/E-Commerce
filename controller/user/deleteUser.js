const { userModel } = require(`../../model/user`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.deleteUser = asyncHandler(async (req, res, next) => {

    const id = req.params.id
    const user = await userModel.findByIdAndUpdate({ _id: id }, { $set: { active: false } })
    if (user) {
        res.status(200).json({ msg: "user deActivated successfully" })
    } else {
        next(new ApiError(`user with id ${id} not found`, 404))

    }

})