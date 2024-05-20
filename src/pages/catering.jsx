import { Helmet } from 'react-helmet-async';

import CateringView from 'src/sections/catering/view/catering-view';

// ----------------------------------------------------------------------

export default function CateringPage() {
  return (
    <>
      <Helmet>
        <title> Kunafatea: Catering Page </title>
      </Helmet>

      <CateringView />
    </>
  );
}
