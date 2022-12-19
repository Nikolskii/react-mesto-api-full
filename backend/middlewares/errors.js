const httpStatusCodes = require('../utils/constants');

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  if (err.name === 'ValidationError') {
    res.status(httpStatusCodes.badRequest.code).send({ message: err.message });
  }

  if (err.name === 'JsonWebTokenError') {
    res
      .status(httpStatusCodes.unauthorized.code)
      .send({ message: httpStatusCodes.unauthorized.messages.incorrectToken });
  }

  if (err.name === 'CastError') {
    return res
      .status(httpStatusCodes.badRequest.code)
      .send({ message: httpStatusCodes.badRequest.message });
  }

  if (err.code === 11000) {
    res
      .status(httpStatusCodes.conflict.code)
      .send({ message: httpStatusCodes.conflict.message });
  }

  res.status(statusCode).send({
    message:
      statusCode === httpStatusCodes.internalServerError.code
        ? httpStatusCodes.internalServerError.message
        : message,
  });

  next();
};
