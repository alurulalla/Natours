const express = require('express');

const { isLoggedIn, protect } = require('../controllers/authController');

const {
  getOverview,
  getTour,
  getLoginForm,
  getUserAccount,
  updateUserData,
  getMyTours,
} = require('../controllers/viewsController');
const { createBookingCheckout } = require('../controllers/bookingController');

const router = express.Router();

router.get('/', createBookingCheckout, isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoginForm);
router.get('/me', protect, getUserAccount);
router.post('/submit-user-data', protect, updateUserData);
router.get('/my-tours', protect, getMyTours);

module.exports = router;
