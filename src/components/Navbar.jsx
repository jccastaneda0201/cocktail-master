import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">CocktailMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
