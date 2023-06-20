const { check } = require(`express-validator`)
const { validationMiddleware } = require(`../utils/validation/validationMiddleware`)
const { validPassword, validName, validEmail, validPasswordConfirm } = require(`../utils/validation/checkValue`)

exports.signUpValidator = [
    validName(`user`),

    validEmail,
    validPassword,
    validPasswordConfirm,
    validationMiddleware
]

exports.loginValidator = [
    validEmail,
    validPassword,
    validationMiddleware
]

