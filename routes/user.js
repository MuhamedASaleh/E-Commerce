const app = require(`express`).Router()
const { createUserValidators, deleteUserValidators, getUserValidators, updateUserPasswordValidators, updateUserValidators }
    = require(`../validation/userValidaion`)
const { isAdmin } = require(`../utils/isAdmin`)

const { newUser } = require(`../controller/user/createUser`)
app.post(`/user`, createUserValidators, newUser)

const { users } = require(`../controller/user/users`)
app.get(`/users`, users)

const { user } = require(`../controller/user/getUser`)
app.get(`/user/:id`, getUserValidators, user)

const { deleteUser } = require(`../controller/user/deleteUser`)
app.delete(`/user/:id`, isAdmin, deleteUserValidators, deleteUser)

const { updateUser } = require(`../controller/user/updateUser`)
app.put(`/user/:id`, updateUserValidators, updateUser)

const { updateUserPassword } = require(`../controller/user/updateUser password`)
app.put(`/user/updatePassword/:id`, updateUserPasswordValidators, updateUserPassword)


module.exports = app