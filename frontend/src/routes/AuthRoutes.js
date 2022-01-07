import { lazy } from 'react';

// project imports
import Loadable from 'components/loadable';
import MinimalLayout from 'views/layout/mini';

// login routing
const AuthLogin = Loadable(lazy(() => import('views/pages/login')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLogin />,
    },
  ],
};

export default AuthenticationRoutes;
