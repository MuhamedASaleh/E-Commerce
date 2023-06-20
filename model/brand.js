
const mongoose = require(`mongoose`)
const brandSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        unique: [true, 'brand name is uniqe']
    },
    slug: {
        type: String
    },
    image: String

},
    { timestamps: true }
)

const brandModel = mongoose.model(`brand`, brandSchema)
exports.brandModel = brandModel






