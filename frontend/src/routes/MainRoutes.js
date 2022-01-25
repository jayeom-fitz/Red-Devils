import { lazy } from 'react';

// project imports
import MainLayout from 'views/layout/main';
import Loadable from 'components/loadable';

// main menu routing
const Contents = Loadable(lazy(() => import('views/pages/main/Contents')));
const Characters = Loadable(lazy(() => import('views/pages/main/Characters')));

// utilities routing
const Color = Loadable(lazy(() => import('views/pages/main/utilities/Color')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/rank',
      element: <Contents />,
    },
    {
      path: '/hot',
      element: <Contents />,
    },
    {
      path: '/contents',
      element: <Contents />,
    },
    {
      path: '/videos',
      element: <Contents />,
    },
    {
      path: '/characters',
      element: <Characters />,
    },
    {
      path: '/color',
      element: <Color />,
    },
  ],
};

export default MainRoutes;
