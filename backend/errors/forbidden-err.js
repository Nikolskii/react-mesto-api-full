const httpStatusCodes = require('../utils/constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = httpStatusCodes.forbidden.code;
  }
}

module.exports = ForbiddenError;
