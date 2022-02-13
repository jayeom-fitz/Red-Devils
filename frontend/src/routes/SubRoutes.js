import { lazy } from 'react';

// project imports
import MainLayout from 'views/layout/main';
import Loadable from 'components/loadable';

// main menu routing
const Content = Loadable(lazy(() => import('views/pages/main/Content')));
const Character = Loadable(lazy(() => import('views/pages/main/Character')));

// utilities routing
const Color = Loadable(lazy(() => import('views/pages/main/utilities/Color')));

// ==============================|| SUB ROUTING ||============================== //

const SubRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/rank',
      element: null,
    },
    {
      path: '/hot',
      element: null,
    },
    {
      path: '/content',
      element: <Content />,
    },
    {
      path: '/video',
      element: null,
    },
    {
      path: '/character',
      element: <Character />,
    },
    {
      path: '/color',
      element: <Color />,
    },
  ],
};

export default SubRoutes;
