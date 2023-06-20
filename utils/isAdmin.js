const { userModel } = require(`../model/user`)
const { ApiError } = require(`./Error/ApiError`)
exports.isAdmin = async (req, res, next) => {

    const user = await userModel.findById(req.user._id)
    if (user) {
        if (user.role == "admin") {
            return next()
        } else {
            return next(new ApiError(`user with id : ${id} not admin`, 500))
        }
    } else {
        return next(new ApiError(`user with id : ${id} not found`, 404))
    }
}