exports.success = function (req, res, message, status) {
    let statusCode = status || 200;
    let statusMessage = message || '';
    res.status(statusCode).send({
        error: false,
        status: status,
        body: message,
    });
}

exports.error = function (req, res, message, status) {
    let statusCode = status || 500;
    let statusMessage = message || 'Interval server error';
    res.status(statusCode).send({
        error: false,
        status: status,
        body: message,
    });
}

// exports.success = function(req, res, message, status) {
//     res.status(status || 200).send({
//         error: '',
//         body: message
//     });
// }

// exports.error = function(req, res, message, status, details) {
//     console.error('[response error]: ' + details);
//     res.status(status || 500).send({
//         error: message,
//         body: ''
//     });
// }