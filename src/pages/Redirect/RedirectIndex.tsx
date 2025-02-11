import React from 'react';
import RedirectReservationSuccess from './RedirectReservationSuccess';
import RedirectReservationCancelSuccessPage from './RedirectCancelSuccess';
import RedirectSignupSuccess from './RedirectSignupSuccess';

interface RedirectIndexProps {
  type?: 'reservation' | 'cancel' | 'signup';
}

function RedirectIndex({ type = 'reservation' }: RedirectIndexProps) {
  switch (type) {
    case 'reservation':
      return <RedirectReservationSuccess />;
    case 'cancel':
      return <RedirectReservationCancelSuccessPage />;
    case 'signup':
      return <RedirectSignupSuccess />;
    default:
      return <RedirectReservationSuccess />;
  }
}

export default RedirectIndex;
