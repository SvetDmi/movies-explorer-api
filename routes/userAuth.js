const router = require('express').Router();
const { login, createUser } = require('../controllers/userAuth');
const { validateUser } = require('../middlewares/validation');

router.post('/signup', validateUser, createUser);

router.post('/signin', validateUser, login);

module.exports = router;
