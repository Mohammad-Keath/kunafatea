import { useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

import { HomePage } from './main';
// import { PATH_AFTER_LOGIN } from 'src/config-global';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // SET INDEX PAGE WITH SKIP HOME PAGE
    // {
    //   path: '/',
    //   element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    // },

    // ----------------------------------------------------------------------

    // SET INDEX PAGE WITH HOME PAGE
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },

    // Auth routes
    // ...authRoutes,
    // ...authDemoRoutes,

    // Dashboard routes
    // ...dashboardRoutes,

    // Main routes
    // ...mainRoutes,

    // Components routes
    // ...componentsRoutes,

    // No match 404
    // { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
