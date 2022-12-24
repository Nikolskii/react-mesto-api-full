const NotFoundError = require('../errors/not-found-err');
const httpStatusCodes = require('../utils/constants');

module.exports = (req, res, next) => {
  try {
    throw new NotFoundError(httpStatusCodes.notFound.messages.page);
  } catch (e) {
    next(e);
  }
};
