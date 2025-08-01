import styled from 'styled-components';
const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  border-radius: var(--borderRadius);
  overflow: hidden;

  &:hover {
    box-shadow: var(--shadow-4);
  }

  .img-container {
    height: 15rem;
    overflow: hidden;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .footer {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;

    h3,
    h5 {
      margin-bottom: 0.5rem;
    }

    h3 {
      font-weight: 700;
      color: var(--primary-700);
    }

    h5 {
      font-weight: 500;
      color: var(--grey-700);
    }

    p {
      color: var(--grey-500);
      margin-bottom: 1rem;
      font-size: var(--small-text);
      flex-grow: 1; /* permite que p tome el espacio disponible */
    }

    .btn-details {
      margin-top: auto; /* empuja el botón al final */
      align-self: flex-start; /* o center si quieres centrarlo */
    }
  }
`;

export default Wrapper;
