const app = require(`express`).Router()
const { signUpValidator, loginValidator } = require(`../validation/auth`)

const { signup } = require(`../controller/auth/signup`)
app.post(`/signup`, signUpValidator, signup)

const { login } = require(`../controller/auth/login`)
app.post(`/login`, loginValidator, login)


module.exports = app