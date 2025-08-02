import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';

const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);

  return { id, data };
};
const Cocktail = () => {
  const { id, data } = useLoaderData();
  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

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
              <span>Name:</span> {name}
            </li>
            <li>
              <span>Category:</span> {category}
            </li>
            <li>
              <span>Glass:</span> {glass}
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
