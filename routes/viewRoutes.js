import express from 'express';
import {
  getOverview,
  getTour,
  getLoginForm,
  updateUserData,
  getAccount,
  getMyTours,
  // eslint-disable-next-line import/extensions
} from '../controllers/viewsController.js';
// eslint-disable-next-line import/extensions
import { isLoggedIn, protect } from '../controllers/authController.js';
// eslint-disable-next-line import/extensions
import { createBookingCheckout } from '../controllers/bookingController.js';

const router = express.Router();

router.get('/', createBookingCheckout, isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoginForm);
router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getMyTours);

router.post('/submit-user-data', protect, updateUserData);

export default router;
