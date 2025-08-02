import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
  const error = useRouteError();
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default SinglePageError;
