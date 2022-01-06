import { lazy } from 'react';

// project imports
import MainLayout from 'views/layout/main';
import Loadable from 'components/loadable';

// utilities routing
const Color = Loadable(lazy(() => import('views/pages/main/utilities/Color')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/color',
      element: <Color />,
    },
  ],
};

export default MainRoutes;
