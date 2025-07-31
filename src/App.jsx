import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { About, HomeLayout, Landing, Error, NewsLetter, Cocktail } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <NewsLetter />,
      },

      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
