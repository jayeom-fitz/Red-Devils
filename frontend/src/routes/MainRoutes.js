import { lazy } from 'react';

// project imports
import MainLayout from 'views/layout/main';
import Loadable from 'components/loadable';

// main menu routing
const Content = Loadable(lazy(() => import('views/pages/main/content/')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/content',
      element: <Content />,
    },
  ],
};

export default MainRoutes;
