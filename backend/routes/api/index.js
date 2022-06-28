const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const daycaresRouter = require('./daycares');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/daycares', daycaresRouter);

module.exports = router;
