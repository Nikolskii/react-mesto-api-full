const router = require('express').Router();
const {
  getUsers,
  getUser,
  getCurrentUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');
const {
  updateUserCelebrate,
  updateAvatarCelebrate,
  getUserCelebrate,
} = require('../validation/users');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', getUserCelebrate, getUser);
router.patch('/me', updateUserCelebrate, updateUser);
router.patch('/me/avatar', updateAvatarCelebrate, updateAvatar);

module.exports = router;
