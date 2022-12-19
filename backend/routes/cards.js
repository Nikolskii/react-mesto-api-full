const router = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const {
  createCardCelebrate,
  likeCardCelebrate,
  dislikeCardCelebrate,
  deleteCardCelebrate,
} = require('../validation/cards');

router.get('/', getCards);
router.post('/', createCardCelebrate, createCard);
router.delete('/:cardId', deleteCardCelebrate, deleteCard);
router.put('/:cardId/likes', likeCardCelebrate, likeCard);
router.delete('/:cardId/likes', dislikeCardCelebrate, dislikeCard);

module.exports = router;
