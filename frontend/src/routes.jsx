import { Outlet } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Productos from './pages/Productos';
import Usuarios from './pages/Usuarios';
import NotFound from './pages/NotFound';

const routes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/productos',
        element: <Productos />,
      },
      {
        path: '/usuarios',
        element: <Usuarios />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default routes;