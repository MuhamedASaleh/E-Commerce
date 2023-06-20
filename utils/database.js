const mongoose = require(`mongoose`)

mongoose.set('strictQuery', false)

exports.DBConnection = () => {
    mongoose.connect(process.env.MONGODBCONNECT
        , {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        },
    ).then((conn) => {
        console.log(`db connected on ${conn.connection.host}`)
    })
    // .catch((err) => {
    //     console.log(`db connection error : ${err}`)
    // })
}

