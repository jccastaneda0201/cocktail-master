import { Outlet } from 'react-router-dom';

const Cocktail = () => {
  return (
    <div>
      <h1>Cocktail</h1>
      <Outlet />
    </div>
  );
};

export default Cocktail;
