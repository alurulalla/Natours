const express = require('express');

const {
  getReviews,
  createReview,
  deleteReview,
  updateReview,
  setTourUserIds,
  getReview,
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(protect);

router
  .route('/')
  .get(getReviews)
  .post(restrictTo('user'), setTourUserIds, createReview);

router
  .route('/:id')
  .delete(deleteReview)
  .patch(restrictTo('user', 'admin'), updateReview)
  .get(restrictTo('user', 'admin'), getReview);

module.exports = router;
