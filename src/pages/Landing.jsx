import { Outlet } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>landing</h1>
      <Outlet />
    </div>
  );
};

export default Landing;
