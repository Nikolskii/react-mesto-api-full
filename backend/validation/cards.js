const { celebrate, Joi } = require('celebrate');

const createCardCelebrate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string()
      .uri({ scheme: ['http', 'https'] })
      .required(),
  }),
});

const likeCardCelebrate = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
});

const dislikeCardCelebrate = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
});

const deleteCardCelebrate = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
});

module.exports = {
  createCardCelebrate,
  likeCardCelebrate,
  dislikeCardCelebrate,
  deleteCardCelebrate,
};
