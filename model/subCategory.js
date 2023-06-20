const mongoose = require(`mongoose`)

const subCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'subCategory name is required'],
        unique: [true, 'subCategory name is uniqe'],
        trim: true
    },
    slug: {
        type: String
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'category',
        required: [true, `subCategory must belong to parent category`]
    }
}, { timestamps: true }
)


const subCategoryModel = mongoose.model(`subCategory`, subCategorySchema)

exports.subCategoryModel = subCategoryModel