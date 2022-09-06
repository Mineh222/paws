const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const daycaresRouter = require('./daycares');
const reviewsRouter = require('./reviews');
const favoritesRouter = require('./favorites');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/daycares', daycaresRouter);

router.use('/reviews', reviewsRouter);

router.use('/favorites', favoritesRouter);

module.exports = router;
