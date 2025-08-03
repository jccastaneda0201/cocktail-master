import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { About, HomeLayout, Landing, Error, NewsLetter, Cocktail, SinglePageError } from './pages';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/NewsLetter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <NewsLetter />,
        action: newsletterAction,
        errorElement: <SinglePageError />,
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
