import { Outlet } from 'react-router-dom';

const NewsLetter = () => {
  return (
    <div>
      <h1>NewsLetter</h1>
      <Outlet />
    </div>
  );
};

export default NewsLetter;
