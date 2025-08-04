import { useLoaderData, Link, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';

const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };
const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));

  if (!data) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter((key) => key.startsWith('strIngredient') && singleDrink[key] !== null)
    .map((key) => singleDrink[key]);

  return (
    <Wrapper>
      <div className="card">
        <div className="img-section">
          <img src={image} alt={name} className="img" />
        </div>
        <div className="info-section">
          <h2 className="title">{name}</h2>
          <ul className="details">
            <li>
              <span>Category:</span> {category}
            </li>
            <li>
              <span>Glass:</span> {glass}
            </li>
            <li>
              <span>Ingredients:</span>
              {validIngredients.map((item, index) => {
                return (
                  <div className="ing" key={item}>
                    <img
                      className="icon"
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency-systems-regular/48/ok--v1.png"
                      alt="ok--v1"
                    />
                    {item}
                    {index < validIngredients.length - 1 ? '' : ''}
                  </div>
                );
              })}
            </li>
            <li>
              <span>Type:</span> {info}
            </li>
            <li>
              <span>Instructions:</span> {instructions}
            </li>
          </ul>
          <Link to="/" className="back-btn">
            ← Back Home
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
