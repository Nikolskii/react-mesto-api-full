const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 450,
  message: 'Превышен лимит количества запросов к серверу',
});

module.exports = { limiter };
