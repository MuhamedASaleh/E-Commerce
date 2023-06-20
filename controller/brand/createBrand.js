const asyncHandler = require(`express-async-handler`)
const slugify = require(`slugify`)
const { brandModel } = require(`../../model/brand`)
exports.newbrand = asyncHandler(async (req, res) => {

    const name = req.body.name
    const brand = await brandModel.create({ name, slug: slugify(name) })
    res.status(200).json({ msg: `new brand added `, data: brand })

})