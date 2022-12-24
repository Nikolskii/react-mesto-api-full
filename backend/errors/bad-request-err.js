const httpStatusCodes = require('../utils/constants');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = httpStatusCodes.badRequest.code;
  }
}

module.exports = BadRequestError;
