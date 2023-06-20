const mongoose = require(`mongoose`)
const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, "too short product title at least 3 character"],
        maxLength: [100, "too long product title at least 3 character"]
    },
    slug: {
        type: String,
        required: true,
        lowerCase: true
    },
    description: {
        type: String,
        minLength: [10, "too short product description at least 10 character"]
    },
    quantity: {
        type: Number,
        required: [true, "product quantity is required"]
    },
    sold: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, "product price is required"],
        trim: true,
        max: [200000, "too long product price at least 20 number"]
    },
    priceAfterDiscount: {
        type: Number
    },
    colors: {
        type: [String]
    },
    imageCover: {
        type: String,
        required: [true, "product image cover is required"]
    },
    images: {
        type: [String]
    },
    category: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'product must belong to category'],
        ref: 'category'
    },
    subCategory: [{
        type: mongoose.Schema.ObjectId,
        ref: 'subCategory'
    }],
    brand: {
        type: mongoose.Schema.ObjectId,
        ref: 'brand'
    },
    ratingsAverage: {
        type: Number,
        min: [1, "rating must be above or equal 1.0"],
        max: [5, "rating must be below or equal 5.0"]
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
})

const productModel = mongoose.model("product", productSchema)
exports.productModel = productModel
