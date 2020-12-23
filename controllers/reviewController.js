const Review = require('../models/reviewModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const factory = require('./factoryHandler');

exports.getReviews = catchAsync(async (req, res, next) => {
  if (!req.user) {
    return next(new AppError('You are not authorized to view reviews', 401));
  }
  let filter;
  if (req.params.tourId) {
    filter = {
      tour: req.params.tourId,
    };
  }
  const reviews = await Review.find(filter);

  res.status(200).json({
    status: 'success',
    data: {
      reviews,
    },
  });
});

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;

  next();
};

exports.createReview = factory.createOne(Review);

exports.deleteReview = factory.deleteOne(Review);

exports.updateReview = factory.updateOne(Review);

exports.getReview = factory.getOne(Review);
