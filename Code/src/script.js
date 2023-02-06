import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter} />);
