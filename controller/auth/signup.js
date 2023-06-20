const asyncHandler = require(`express-async-handler`)

const { userModel } = require(`../../model/user`)
const { createToken } = require(`../../utils/createToken`)
const { hashing } = require(`../../utils/hashingPassword`)
exports.signup = asyncHandler(async (req, res) => {
    const hash = await hashing(req.body.password)
    const user = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
    })

    const token = createToken(user._id)
    await userModel.findByIdAndUpdate(user._id)
    res.status(201).json({ data: user, token })
})