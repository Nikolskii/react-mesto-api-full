const jwt = require('jsonwebtoken');
const httpStatusCodes = require('../utils/constants');
const UnauthorizedError = require('../errors/unauthorized-err');

module.exports = (req, res, next) => {
  const { NODE_ENV, JWT_SECRET } = process.env;
  const { authorization } = req.headers;
  let payload;

  try {
    const token = authorization.replace('Bearer ', '');

    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
    );
  } catch (e) {
    next(
      new UnauthorizedError(
        httpStatusCodes.unauthorized.messages.incorrectToken,
      ),
    );
  }

  req.user = payload;

  next();
};
