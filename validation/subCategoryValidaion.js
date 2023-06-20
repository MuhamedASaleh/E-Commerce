const { check } = require(`express-validator`)
const { validationMiddleware } = require(`../utils/validation/validationMiddleware`)
const { validId, validName } = require(`../utils/validation/checkValue`)

exports.getSubCategoryValidators = [
    validId('subCategory'),
    validationMiddleware
]
exports.deleteSubCategoryValidators = [
    validId('subCategory'),
    validationMiddleware
]
exports.updateSubCategoryValidators = [
    validId('subCategory'),
    validName(`subCategory`),
    validationMiddleware
]
exports.newSubCategoryValidators = [
    validName(`subCategory`),
    check(`category`)
        .notEmpty()
        .withMessage(`subCategory must be belong to category`)
        .isMongoId()
        .withMessage(`invalid category id format`)
    , validationMiddleware
]

