const asyncHandler = require(`express-async-handler`)
const { ApiError } = require("../../utils/Error/ApiError")
const { userModel } = require(`../../model/user`)
const jwt = require(`jsonwebtoken`)

exports.auth = asyncHandler(async (req, res, next) => {

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.jwtSECRETKEY)
        const currentUser = await userModel.findById(decoded.userId)

        if (!currentUser || currentUser.active == false) {
            return next(new ApiError(`the user that belong to this token does no longer exist`, 401))
        }

        if (currentUser.passwordChangedAt) {
            const passwordChangedTimeStamp = currentUser.passwordChangedAt.getTime()
            if (passwordChangedTimeStamp > decoded.iat * 1000) {
                return next(new ApiError(`user recently changed his password , please login again`, 401))
            }
        }
        req.user = currentUser
        next()
    }
    else {
        return next(new ApiError(`you are not authorized`, 401))
    }
})