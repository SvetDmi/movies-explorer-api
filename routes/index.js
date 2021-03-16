const router = require('express').Router();
const crashRouter = require('./crash');
const userAuthRouter = require('./userAuth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
// const { ErrorNotFound404 } = require('../errors/index');
const { notFound } = require('../utils/answers');

router.use('/', userAuthRouter);
router.use('/useres', auth, usersRouter);
router.use('/movies', auth, moviesRouter);
router.use('/crash-test', crashRouter);

router.use('*', (req, res, next) => {
  res.status(404).send(notFound);
  return next();
});

module.exports = router;
