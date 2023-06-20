const { check } = require(`express-validator`)
const { userModel } = require(`../../model/user`)

exports.validId = (value) => {
    return [
        check("id").isMongoId().withMessage(`invalid ${value} id format`)
    ]
}
exports.validName = (value) => {
    return [
        check("name")
            .toLowerCase()
            .notEmpty()
            .withMessage(`${value} required`)
            .toLowerCase()
            .isLength({ min: 3 })
            .withMessage(`too short ${value} name at least 3 characters`)
            .isLength({ max: 32 })
            .withMessage(`too long ${value} name at most 32 characters`)
    ]
}
exports.validPassword =
    [
        check("password")
            .notEmpty()
            .withMessage(`user password is required`)
            .trim()
            .isLength({ min: 6 })
            .withMessage(`password must be at least 6 character`)
    ]

exports.validEmail =
    [
        check("email")
            .notEmpty()
            .withMessage(`user email is required`)
            .trim()
            .isEmail()
            .withMessage(`invalid email formater`)
            .custom(async (value) => {
                const user = await userModel.findOne({ email: value })
                if (!user) {
                    throw new Error(`email already in use`)
                } else {
                    return true
                }
            })
    ]

exports.validPasswordConfirm =
    [
        check("passwordConfirm")
            .notEmpty()
            .withMessage(`password confirm required`)
            .custom((value, { req }) => {
                if (value === req.body.password) {
                    return true
                } else {
                    throw new Error(`password confmation incorrect`)
                }
            })
    ]

exports.validPhoneNumber =
    [
        check("phoneNumber")
            .optional()
            .trim()
            .isMobilePhone("ar-EG")
            .withMessage(`invalid phone number formater`)
    ]
exports.validProfileImgAndRole =
    [
        check("profileImg")
            .optional(),
        check("role")
            .optional()
    ]