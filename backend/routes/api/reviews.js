const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models');

const router = express.Router();

router.delete("/:id", asyncHandler(async (req, res) => {
    const reviewId = req.params.id
    const review = await Review.findByPk(reviewId);

    await review.destroy();

    return res.json({success: true})
}))


module.exports = router;
