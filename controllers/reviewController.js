// eslint-disable-next-line import/extensions
import Review from '../models/reviewModel.js';
// eslint-disable-next-line import/extensions
import * as factory from './handlerFactory.js';

export const setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

export const getReview = factory.getOne(Review);
export const getAllReviews = factory.getAll(Review);
export const createReview = factory.createOne(Review);
export const updateReview = factory.updateOne(Review);
export const deleteReview = factory.deleteOne(Review);
