const express = require(`express`)
const app = express()

require(`dotenv`).config()
// dotenv
// dotenv.config({path:".env"})

app.use(express.json({ limit: '20kb' }))

app.use(`/api/v1`,
    require(`./routes/category`),
    require(`./routes/subCategory`),
    require(`./routes/brand`),
    require(`./routes/product`),
    require(`./routes/user`),
    require(`./routes/auth`))

const { globalError } = require(`./utils/Error/errorMiddleware`)
app.use(globalError)

const { DBConnection } = require(`./utils/database`)
DBConnection()

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`app listen on port ${port}`)
    // const io = require(`socket.io`)(server)
    // io.on(`connection`,socket=>{
    //     console.log(`client connected`)
    // })
})
process.on(`unhandledRejection`, (err) => {
    console.error(`unhandledRejection error ${err}`)
    server.close(() => {
        console.error(`application shut down`)
        process.exit(1)
    })
})
