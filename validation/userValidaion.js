const { check } = require(`express-validator`)
const { validationMiddleware } = require(`../utils/validation/validationMiddleware`)
const { validId, validName, validPassword, validEmail, validPasswordConfirm, validPhoneNumber, validProfileImgAndRole }
    = require(`../utils/validation/checkValue`)
const { userModel } = require(`../model/user`)
const bcrypt = require(`bcryptjs`)

exports.getUserValidators = [
    validId('user'),
    validationMiddleware
]
exports.deleteUserValidators = [
    validId('user'),
    validationMiddleware
]
exports.updateUserValidators = [
    validId('user'),
    validName(`user`),
    validEmail,
    validPhoneNumber,
    validProfileImgAndRole
    ,
    validationMiddleware
]
exports.updateUserPasswordValidators = [
    validId('user'),
    check("currentPassword")
        .notEmpty()
        .withMessage(`user current password is required`)
        .trim()
        .custom(async (value, { req }) => {
            const user = await userModel.findOne({ _id: req.params.id })
            if (!user) {
                throw new Error(`there is no user for this id : ${req.params.id}`)
            }

            const matches = await bcrypt.compare(value, user.password)
            if (matches) {
                return true
            } else {
                throw new Error(`current password is incorect`)
            }
        }),
    validPassword,
    validPasswordConfirm,
    validationMiddleware
]
exports.createUserValidators = [
    validName(`user`),
    validEmail,
    validPassword,
    validPasswordConfirm,
    validPhoneNumber,
    validProfileImgAndRole
    ,
    validationMiddleware
]

