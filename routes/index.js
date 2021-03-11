const router = require('express').Router();
const routerCrash = require('./crashTest');





router.use('/crash-test', routerCrash);

module.exports = router;
