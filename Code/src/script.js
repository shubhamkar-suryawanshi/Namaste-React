import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Error from './components/Error';
import Restaurant from './components/Restaurant';
import Shimmer from './components/Shimmer';
import FAQ from './components/FAQ';
import MyContext from './shared/MyContext';

import { Provider } from 'react-redux';
import store from './shared/store';
import Cart from './components/Cart';

const About = lazy(() => {
  return import('./components/About');
});
// const About = lazy(() => {import('./components/About')}); ==> why this didn't worked?

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Surya',
    email: 'surya@surya.com',
  });
  return (
    // <MyContext.Provider value={user}>
    // replace user with default value

    // <MyContext.Provider value={{
    //   user: {
    //     name: 'dummy',
    //     email: 'dummy@surya.com'
    //   },
    // }}>

    // replace it with useState value.
    <Provider store={store}>
      <MyContext.Provider
        value={{
          user: user,
        }}
      >
        {/* with the help of setUser, uh can modify it*/}
        <Header />
        <Outlet />
        <Footer />
      </MyContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/restaurant/:resId',
        element: <Restaurant />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter} />);
