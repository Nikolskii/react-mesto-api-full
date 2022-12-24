const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const httpStatusCodes = require('../utils/constants');
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');

const login = async (req, res, next) => {
  const { NODE_ENV, JWT_SECRET } = process.env;

  const { email, password } = req.body;

  try {
    const user = await User.findUserByCredentials(email, password);

    const token = jwt.sign(
      { _id: user._id },
      NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
      {
        expiresIn: '7d',
      },
    );

    return res.send({ token });
  } catch (e) {
    next(e);
  }
};

const createUser = async (req, res, next) => {
  const { name, about, avatar, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      about,
      avatar,
      email,
      password: hashPassword,
    });

    return res.status(httpStatusCodes.created.code).send({
      name: user.name,
      about: user.about,
      avatar: user.avatar,
      email: user.email,
    });
  } catch (e) {
    next(e);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    return res.status(httpStatusCodes.ok.code).send(users);
  } catch (e) {
    next(e);
  }
};

const getUser = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new NotFoundError(httpStatusCodes.notFound.messages.user);
    }

    return res.status(httpStatusCodes.ok.code).send(user);
  } catch (e) {
    next(e);
  }
};

const getCurrentUser = async (req, res, next) => {
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new NotFoundError(httpStatusCodes.notFound.messages.user);
    }

    return res.status(httpStatusCodes.ok.code).send(user);
  } catch (e) {
    next(e);
  }
};

const updateUser = async (req, res, next) => {
  const { name, about } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        name,
        about,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedUser) {
      throw new NotFoundError(httpStatusCodes.notFound.messages.user);
    }

    return res.status(httpStatusCodes.ok.code).send(updatedUser);
  } catch (e) {
    next(e);
  }
};

const updateAvatar = async (req, res, next) => {
  const { avatar } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        avatar,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedUser) {
      throw new NotFoundError(httpStatusCodes.notFound.messages.user);
    }

    return res.status(httpStatusCodes.ok.code).send(updatedUser);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  login,
  getUsers,
  getUser,
  getCurrentUser,
  createUser,
  updateUser,
  updateAvatar,
};
