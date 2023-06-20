const { check } = require(`express-validator`)
const { validationMiddleware } = require(`../utils/validation/validationMiddleware`)
const { categoryModel } = require(`../model/category`)
const { subCategoryModel } = require(`../model/subCategory`)
const { brandModel } = require(`../model/brand`)
const { validId } = require(`../utils/validation/checkValue`)

exports.getProductValidators = [
    validId('product'),
    validationMiddleware
]
exports.deleteProductValidators = [
    validId('product'),
    validationMiddleware
]
exports.updateProductValidators = [
    validId('product'),
    validationMiddleware
]
exports.newProductValidators = [
    check("title")
        .toLowerCase()
        .notEmpty()
        .withMessage(`product title required`)
        .isLength({ min: 3 })
        .withMessage(`too short product title at least 3 characters`),
    check("description")
        .toLowerCase()
        .notEmpty()
        .withMessage(`product description required`)
        .isLength({ max: 2000 })
        .withMessage(`too long description`),
    check("quantity")
        .notEmpty()
        .withMessage(`product quantity required`)
        .isNumeric()
        .withMessage(`product quantity must be a number`),
    check("sold")
        .optional()
        .isNumeric()
        .withMessage(`product quantity must be a number`),
    check("price")
        .notEmpty()
        .withMessage(`product price required`)
        .isNumeric()
        .withMessage(`product price must be a number`),
    check("priceAfterDiscount")
        .optional()
        .toFloat()
        .isNumeric()
        .withMessage(`product priceAfterDiscount must be a number`)
        .custom((value, { req }) => {
            if (value >= req.body.price) {
                throw new Error('price after discount must be less than price before discount')
            }
            return true
        }),

    check("colors")
        .optional()
        .isArray()
        .withMessage(`colours must be array of string`),
    check("imageCover")
        .notEmpty()
        .withMessage(`product imageCover is required`),
    check("images")
        .optional()
        .isArray()
        .withMessage(`images should be array of string`),
    check("category")
        .notEmpty()
        .withMessage(`product must be belong to category`)
        .isMongoId()
        .withMessage(`invalid id formater`)
        .custom(async (value) => {
            const category = await categoryModel.findById(value)
            if (!category) {
                throw new Error(`no category exist for this id : ${value}`)
            }
            return true
        })
    ,
    check("subCategory")
        .optional()
        .isMongoId()
        .withMessage(`invalid id formater`)
        .custom(async (value) => {
            await subCategoryModel.find({ _id: { $exists: true, $in: value } })
                .then((result) => {
                    if (result.length != value.length) {
                        throw new Error(`no subCategory exist for this id : ${value}`)
                    }
                    return true
                })
        }),
    check("brand")
        .optional()
        .isMongoId()
        .withMessage(`invalid id formater`)
        .custom(async (value) => {
            const brand = await brandModel.findById(value)
            if (!brand) {
                throw new Error(`no brand exist for this id : ${value}`)
            }
            return true
        }),
    check("ratingsAverage")
        .optional()
        .isNumeric()
        .withMessage(`ratingsAverage must be a number`)
        .isLength({ min: 1 })
        .withMessage(`rating must be above or equal 1.0`)
        .isLength({ max: 5 })
        .withMessage(`rating must be below or equal 5.0`),
    check("ratingsQuantity")
        .optional()
        .isNumeric()
        .withMessage(`ratingsQuantity must be a number`)
    , validationMiddleware
]

