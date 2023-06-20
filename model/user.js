const mongoose = require(`mongoose`)
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
        lowerCase: true
    },
    slug: {
        type: String,
        lowerCase: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        trim: true,
        lowerCase: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        trim: true,
        minLength: [6, "too short password"]
    },
    passwordChangedAt: Date,
    phoneNumber: {
        type: String
    },
    profileImg: {
        type: String
    },
    role: {
        type: String,
        enum: [`user`, `admin`],
        default: `user`
    },
    active: {
        type: Boolean,
        default: true
    },
    token: {
        type: String
    }
}, {
    timestamps: true
})
const userModel = mongoose.model(`user`, userSchema)
exports.userModel = userModel
