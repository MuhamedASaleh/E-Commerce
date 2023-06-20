const { userModel } = require(`../../model/user`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
const bcrypt = require(`bcryptjs`)
exports.updateUserPassword = asyncHandler(async (req, res, next) => {

    const user = await userModel.findByIdAndUpdate(req.params.id, {
        password: await bcrypt.hash(req.body.password, 12),
        passwordChangedAt: Date.now()
    })
    if (user) {
        res.status(200).json({ msg: "user password updated successfully" })
    } else {
        next(new ApiError(`user with id ${id} not found`, 404))

    }

})