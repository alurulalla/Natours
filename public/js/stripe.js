import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51GxnbhFNOpexbCUvbKXFUXiL2khYZAArmEqRvRZCRInvnp37HLT7uHjSah9P1ojCq8gvybFYj39CMd9iUsB11vvZ00JrI3fZlq'
);

export const bookTour = async (tourId) => {
  try {
    // Get Checkout session from API
    const session = await axios(
      `http://localhost:4000/api/v1/booking/checkout-session/${tourId}`
    );
    //   console.log(session);

    // Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
