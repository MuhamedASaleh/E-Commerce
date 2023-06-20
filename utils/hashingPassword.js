



const bcrypt = require(`bcryptjs`)
exports.hashing = (password) => {
    return bcrypt.hash(password, 12)
}