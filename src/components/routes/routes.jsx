import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
// import HomePage from '../../pages/HomePage';
const HomePage = lazy(() => import('../../pages/HomePage'));
const ServicesPage = lazy(() => import('../../pages/ServicesPage'));
const ContactPage = lazy(() => import('../../pages/ContactPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));


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
      {
        path: '/contact',
        element: <ContactPage />,
      },
      // Not Found
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
