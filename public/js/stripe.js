/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts.js';

export const booktour = async(tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51SQczwEDRzOXe6ifzYqHhyY4sfQ8Gm0WC5YVPtCfj1ug08KnnpiOpxmnxtpoCtZ3bF9jqHV72umNu24yTI4VXQBw006CORhG8U',
    );

    const session = await axios(
      `http://localhost:3001/api/v1/bookings/checkout-session/${tourId}`,
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    })
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
  
  
}