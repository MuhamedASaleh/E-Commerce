const { validationMiddleware } = require(`../utils/validation/validationMiddleware`)
const { validId, validName } = require(`../utils/validation/checkValue`)

exports.getBrandValidators = [
    validId('brand'), validationMiddleware
]
exports.deleteBrandValidators = [
    validId('brand'), validationMiddleware
]
exports.updateBrandValidators = [
    validId('brand'),
    validName(`brand`),
    validationMiddleware
]
exports.newBrandValidators = [
    validName(`brand`),
    validationMiddleware
]

