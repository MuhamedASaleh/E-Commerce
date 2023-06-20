const asyncHandler = require(`express-async-handler`)
const slugify = require(`slugify`)
const bcrypt = require(`bcryptjs`)
const { userModel } = require(`../../model/user`)

exports.newUser = asyncHandler(async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 12)
    req.body.password = hash

    req.body.slug = slugify(req.body.name)
    const user = await userModel.create(req.body)
    res.status(200).json({ msg: `new user added `, data: user })

})