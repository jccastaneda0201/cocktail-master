import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    gap: 0.5rem;
    background: transparent;
    color: var(--primary-700);
    border: 2px solid var(--primary-500);
    border-radius: var(--borderRadius);
    padding: 0.5rem 1.25rem;
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    box-shadow: 0 2px 8px rgba(228, 59, 68, 0.1);
  }

  a:hover {
    background: var(--primary-500);
    color: var(--white);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(228, 59, 68, 0.2);
  }
`;

export default Wrapper;
