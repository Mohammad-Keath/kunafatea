import { Helmet } from 'react-helmet-async';

import ReservationView from 'src/sections/reservation/view/reservation-view';

// ----------------------------------------------------------------------

export default function ReservationPage() {
  return (
    <>
      <Helmet>
        <title> Kunafatea: Reservation Page </title>
      </Helmet>

      <ReservationView />
    </>
  );
}
