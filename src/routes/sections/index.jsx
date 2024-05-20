import { Outlet, useRoutes } from 'react-router-dom';

import HomePage from 'src/pages/home';
import MenuPage from 'src/pages/menu';
import NewsPage from 'src/pages/news';
import MainLayout from 'src/layouts/main';
import OurstoryPage from 'src/pages/story';
import CateringPage from 'src/pages/catering';
import ReservationPage from 'src/pages/reservation';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        {
          path: '/menu',
          element: <MenuPage />,
        },
        {
          path: '/catering',
          element: <CateringPage />,
        },
        {
          path: '/news',
          element: <NewsPage />,
        },
        {
          path: '/ourstory',
          element: <OurstoryPage />,
        },
        {
          path: '/reservation',
          element: <ReservationPage />,
        },
      ],
    },
    // {
    //   path: '/menu',
    //   element: (
    //     <MainLayout>
    //       <MenuPage />
    //     </MainLayout>
    //   ),
    // },
  ]);
}
