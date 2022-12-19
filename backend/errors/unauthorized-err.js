const httpStatusCodes = require('../utils/constants');

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = httpStatusCodes.unauthorized.code;
  }
}

module.exports = UnauthorizedError;
