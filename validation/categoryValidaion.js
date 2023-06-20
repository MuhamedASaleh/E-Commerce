const { validationMiddleware } = require(`../utils/validation/validationMiddleware`)
const { validId, validName } = require(`../utils/validation/checkValue`)

exports.getCategoryValidators = [
    validId(`category`),
    validationMiddleware
]
exports.deleteCategoryValidators = [
    validId(`category`),
    validationMiddleware
]
exports.updateCategoryValidators = [
    validId(`category`),
    validName(`category`),
    validationMiddleware
]
exports.newCategoryValidators = [
    validName(`category`),
    validationMiddleware
]

