const NotFoundError = require('../errors/not-found-err');
const httpStatusCodes = require('../utils/constants');

module.exports = (req, res, next) => {
  next(new NotFoundError(httpStatusCodes.notFound.messages.page));
};
