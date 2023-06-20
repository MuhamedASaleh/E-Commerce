
const mongoose = require(`mongoose`)
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        unique: [true, 'subCategory name is uniqe']
    },
    slug: {
        type: String
    },
    image: String

},
    { timestamps: true }
)

const categoryModel = mongoose.model(`category`, categorySchema)

exports.categoryModel = categoryModel




