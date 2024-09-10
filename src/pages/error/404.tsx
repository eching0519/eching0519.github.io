import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { NotFoundView } from 'src/sections/error/not-found-view';

// ----------------------------------------------------------------------

const metadata = { title: `404 page not found! | Error - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <NotFoundView />
    </>
  );
}
