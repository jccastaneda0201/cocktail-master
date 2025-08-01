import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4rem 1.5rem;
  display: flex;
  justify-content: center;
  background: var(--backgroundColor);

  .card {
    background: var(--white);
    max-width: 1200px;
    width: 100%;
    display: grid;
    border-radius: 1rem;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    grid-template-columns: 1fr;
    transition: all 0.3s ease-in-out;
  }

  .img-section {
    background: var(--grey-100);
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img {
    width: 100%;
    max-width: 450px;
    border-radius: 1rem;
    box-shadow: var(--shadow-2);
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .img:hover {
    transform: scale(1.02);
  }

  .info-section {
    padding: 3rem 2.5rem;
  }

  .back-btn {
    background: var(--primary-500);
    color: var(--primary-700);
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 1px;
    padding: 0;
    border: none;
    margin-bottom: 1.5rem;
    transition: color 0.3s ease;
  }

  .back-btn:hover {
    color: var(--primary-500);
    text-decoration: underline;
  }

  .title {
    color: var(--primary-700);
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    position: relative;
  }

  .title::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 4px;
    background: var(--primary-500);
    left: 35%;
    bottom: -10px;
    border-radius: 2px;
  }

  .details {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
  }

  .details li {
    margin-bottom: 1.25rem;
    font-size: 1.05rem;
    color: var(--grey-800);
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    line-height: 1.6;
  }

  .details span {
    font-weight: 700;
    color: var(--primary-600);
    min-width: 120px;
    display: inline-block;
  }

  @media (min-width: 992px) {
    .card {
      grid-template-columns: 1fr 1fr;
    }

    .info-section {
      padding: 4rem;
    }

    .title {
      font-size: 3rem;
    }

    .details li {
      font-size: 1.125rem;
    }
  }
`;

export default Wrapper;
