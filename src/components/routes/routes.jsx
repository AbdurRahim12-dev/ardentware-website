import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import HomePage from '../../pages/HomePage';
import ServicesPage from '../../pages/ServicesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/service',
        element: <ServicesPage />,
      },
    ],
  },
]);
