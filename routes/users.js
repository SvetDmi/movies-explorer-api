const router = require('express').Router();
const { validateUser } = require('../middlewares/validation');
const {
  getMe, updateProfile,
} = require('../controllers/users.js');

router.get('/users/me', getMe);

router.patch('/users/me', validateUser, updateProfile);

module.exports = router;
