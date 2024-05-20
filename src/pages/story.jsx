import { Helmet } from 'react-helmet-async';

import StoryView from 'src/sections/story/view/ourstory-view';

// ----------------------------------------------------------------------

export default function StoryPage() {
  return (
    <>
      <Helmet>
        <title> Kunafatea: Our Story Page </title>
      </Helmet>

      <StoryView />
    </>
  );
}
