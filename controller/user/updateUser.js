const { userModel } = require(`../../model/user`)
const { ApiError } = require("../../utils/Error/ApiError")
const asyncHandler = require(`express-async-handler`)
const slugify = require(`slugify`)
exports.updateUser = asyncHandler(async (req, res, next) => {

    const user = await userModel.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        slug: slugify(req.body.name),
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        profileImg: req.body.profileImg,
    })
    if (user) {
        res.status(200).json({ msg: "user updated successfully" })
    } else {
        next(new ApiError(`user with id ${id} not found`, 404))

    }

})