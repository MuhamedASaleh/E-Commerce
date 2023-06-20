
exports.globalError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    res.status(err.statusCode).json({
        statusCode: err.statusCode,
        status: err.status,
        message: err.message

    })
}





        // in development mode

        // statusCode: err.statusCode,
        // status: err.status,
        // message: err.message,
        // error: err,
        // stack: err.stack

        // in production mode