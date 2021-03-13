const router = require('express').Router();
const routerCrash = require('./crashTest');
const userAuthRouter = require('./userAuth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');

router.use('/', userAuthRouter);
router.use('/', auth, usersRouter);
router.use('/', auth, moviesRouter);
router.use('/crash-test', routerCrash);

module.exports = router;
