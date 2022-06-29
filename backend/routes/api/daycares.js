const express = require('express');
const asyncHandler = require('express-async-handler');

const { Daycare } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth')

router.get('/', asyncHandler(async (req,res) => {
    const daycares = await Daycare.findAll({
        // order: [['id', 'DESC']]
    })
    return res.json(daycares)
}));

const daycareValidations = [
    check('name')
      .exists({ checkFalsy: true })
      .withMessage('Please provide your business name.'),
    check('description')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a description of your business'),
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Please provide your business address'),
    check('phoneNumber')
        .exists({ checkFalsy: true })
        .withMessage('Please provide your business phone number'),
    check('businessHours')
        .exists({ checkFalsy: true })
        .withMessage('Please provide your business hours'),
    check('businessHours')
        .exists({ checkFalsy: true })
        .withMessage('Please provide your business hours'),
    check('image')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an image URL for your business'),
    handleValidationErrors
];

router.post('/', requireAuth, daycareValidations, asyncHandler(async (req, res) => {
    const {
        ownerId,
        name,
        description,
        address,
        phoneNumber,
        businessHours,
        image
    } = req.body

    const daycare = await Daycare.create(req.body);

    return res.json(daycare)
    // return res.redirect('/api/daycares')
}))

router.get('/:id', asyncHandler(async (req,res) => {
    const daycareId = req.params.id
    const daycare = await Daycare.findByPk(daycareId)
    return res.json(daycare)
}));

router.put('/:id', daycareValidations, asyncHandler(async (req, res) => {
    const daycareId = req.params.id
    const daycare = await Daycare.findByPk(daycareId);

    await daycare.update(req.body);

    return res.json(daycare);
}))

router.delete("/:id", asyncHandler(async (req, res) => {
    const daycareId = req.params.id
    const daycare = await Daycare.findByPk(daycareId);

    await daycare.destroy();

    return res.json({ success: true });
}))

module.exports = router;
