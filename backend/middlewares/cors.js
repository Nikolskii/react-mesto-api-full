const cors = require('cors');

module.exports = cors({
  origin: [
    'https://mesto-nikolsky.nomoredomains.club',
    'http://mesto-nikolsky.nomoredomains.club',
    'http://localhost:3000',
  ],
  optionsSuccessStatus: 200,
  credentials: true,
});
