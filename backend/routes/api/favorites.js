const express = require('express');
const asyncHandler = require('express-async-handler');

const { Favorite, User } = require('../../db/models');

const router = express.Router();

const { requireAuth } = require('../../utils/auth')

router.get('/', asyncHandler(async (req,res) => {
    const favorites = await Favorite.findAll()

    return res.json(favorites)
}))

router.get('/daycares/:daycareId', asyncHandler(async (req, res) => {
    const daycareId = req.params;
    const favorites = await Favorite.findAll({
        where: {
            daycareId: daycareId
        },
        include: User
    })
    return res.json(favorites)
}))

router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const {
        userId,
        daycareId
    } = req.body

    const favorite = await Favorite.create(req.body);

    return res.json(favorite);
}))

router.delete('/:favoriteId', requireAuth, asyncHandler(async (req, res) => {
    const { favoriteId } = req.params;
    const favorite = await Favorite.findByPk(favoriteId);

    await favorite.destroy();

    return res.json({ success: true });
}))

module.exports = router;
