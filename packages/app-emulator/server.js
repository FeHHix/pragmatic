module.exports = (req, res, next) => {
    if (req.method === 'POST') {
        req.method = 'GET';
        req.query = req.body;
    }

    if (req.url.includes('error500')) {
        res.status(500).jsonp({
            error: 'Internal Server Error',
            message: 'Ошибочно ошибиться ошибаясь ошибочной ошибкой',
            path: '/ic/ufs/internet-acquiring/',
            status: 500,
            timestamp: '2020-05-08',
        });
    } else {
        next();
    }
};
