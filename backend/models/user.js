const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const bcrypt = require('bcryptjs');
const UnauthorizedError = require('../errors/unauthorized-err');
const httpStatusCodes = require('../utils/constants');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      default: 'Жак-Ив Кусто',
    },
    about: {
      type: String,
      minlength: 2,
      maxlength: 30,
      default: 'Исследователь',
    },
    avatar: {
      type: String,
      validate: {
        validator: (v) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          /(http|https):\/\/(w{3}\.)?[0-9a-z-._~:/?#[\]@!$&'()*+,;=,]/.test(v),
        message: 'Недопустимый URL-адрес',
      },
      default:
        'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) => isEmail(v),
        message: 'Неправильный формат почты',
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
      minlength: 8,
    },
  },
  { versionKey: false },
);

// eslint-disable-next-line func-names
userSchema.statics.findUserByCredentials = async function (email, password) {
  const user = await this.findOne({ email }).select('+password');

  if (!user) {
    throw new UnauthorizedError(
      httpStatusCodes.unauthorized.messages.incorrectUserData,
    );
  }

  const matched = await bcrypt.compare(password, user.password);

  if (!matched) {
    throw new UnauthorizedError(
      httpStatusCodes.unauthorized.messages.incorrectUserData,
    );
  }

  return user;
};

module.exports = mongoose.model('user', userSchema);
