import styled from 'styled-components';

const Wrapper = styled.nav`
  background: var(--white);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;

  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 2rem;
    transition: all 0.3s ease-in-out;
  }

  .logo {
    font-size: clamp(1.75rem, 2.5vw, 2.5rem);
    font-weight: 800;
    color: var(--primary-600);
    letter-spacing: 3px;
    position: relative;
  }

  .nav-links {
    display: flex;
    gap: 1.75rem;
    flex-wrap: wrap;
  }

  .nav-link {
    font-size: 1rem;
    font-weight: 500;
    color: var(--grey-700);
    letter-spacing: 1px;
    position: relative;
    transition: color 0.3s ease-in-out;
    padding-bottom: 0.25rem;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background: var(--primary-500);
    transition: width 0.3s ease-in-out;
    border-radius: 1px;
  }

  .nav-link:hover {
    color: var(--primary-700);
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .active {
    color: var(--primary-700);
    font-weight: 600;
  }

  .active::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    .nav-center {
      flex-direction: column;
      gap: 1rem;
    }

    .nav-links {
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }
  }
`;

export default Wrapper;
