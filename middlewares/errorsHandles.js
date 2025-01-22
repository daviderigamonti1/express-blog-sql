function errorsHandles(err, req, res, next) {
    console.log(err.stack.split("\n")[0], "err:" + err.stack.split("\n")[1]);
    req.status(err.statusCode || 500);
    res.json({
        status: err.statusCode || 500,
        error: err.message,
    });
}

module.exports = errorsHandles;