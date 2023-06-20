const bcrypt = require(`bcryptjs`)
const asyncHandler = require(`express-async-handler`)
const { ApiError } = require("../../utils/Error/ApiError")

const { userModel } = require(`../../model/user`)
const { createToken } = require(`../../utils/createToken`)

exports.login = asyncHandler(async (req, res, next) => {
    const user = await userModel.findOne({
        email: req.body.email
    })

    if (user) {
        const matches = await bcrypt.compare(req.body.password, user.password)
        if (matches) {
            const token = createToken(user._id)
            res.status(200).json({ data: user, token })
        } else {
            return next(new ApiError(`incorrect email or password`,500))
        }
    } else {
        return next(new ApiError(`user not found`, 404))
    }


})