const { userModel } = require(`../../model/user`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
exports.users = asyncHandler(async (req, res, next) => {

    const page = req.query.page || 1
    const limit = req.query.limit || 5
    const skip = (page - 1) * limit
    const user = await userModel.find().skip(skip).limit(limit)
    
    if (user.length) {
        res.status(200).json({ page, users: user.length, data: user })
    } else {
        next(new ApiError(`can't found any user`, 404))
    }
})


