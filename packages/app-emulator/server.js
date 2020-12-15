module.exports = (req, res, next) => {
    if (req.method === 'POST') {
        req.method = 'GET';
        req.query = req.body;
    }

    if (req.url.includes('error500')) {
        res.status(500).jsonp({
            error: 'Internal Server Error',
            message: 'Что-то пошло не так',
            status: 500,
            timestamp: new Date(),
        });
    } else {
        next();
    }
};
