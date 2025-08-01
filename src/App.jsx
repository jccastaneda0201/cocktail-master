import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { About, HomeLayout, Landing, Error, NewsLetter, Cocktail } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
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
        children: [
          {
            index: true,
            element: <h1>privacy</h1>,
          },
          {
            path: 'terms',
            element: <h1>terms</h1>,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
