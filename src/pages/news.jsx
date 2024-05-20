import { Helmet } from 'react-helmet-async';

import NewsView from 'src/sections/news/view/news-view';

// ----------------------------------------------------------------------

export default function NewsPage() {
  return (
    <>
      <Helmet>
        <title> Kunafatea: News Page </title>
      </Helmet>

      <NewsView />
    </>
  );
}
