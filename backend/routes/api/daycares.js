const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Daycare } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

router.get('/', asyncHandler(async (req,res) => {
    const daycares = await Daycare.findAll({
        // order: [['id', 'DESC']]
    })
    return res.json(daycares)
}));


module.exports = router;
