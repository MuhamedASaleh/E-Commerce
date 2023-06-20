
const jwt = require(`jsonwebtoken`)
exports.createToken = (payload) => {
    return jwt.sign({ userId: payload }, process.env.jwtSECRETKEY, {
        expiresIn: process.env.jwtExpireTime
    })
}
