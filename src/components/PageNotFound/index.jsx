import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utils/customStyles';
import { FaFrown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Container = styled.main`
  height: calc(100vh - 20px);
  width: 100%;
  background: ${customStyles.dark_01};
  color: ${customStyles.light_01};
  display: grid;
  place-items: center;

  .not-found-msg {
    text-align: center;

    strong {
      font-size: 6rem;
      color: ${customStyles.accent_01};
    }

    .frown-icon {
      margin-left: 20px;
    }
  }

  .go-back-btn {
    padding: 9px 20px;
    font-weight: 900;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .4s ease;
    color: ${customStyles.light_01};
    background: transparent;
    border: 1px solid ${customStyles.light_01};
    margin: auto;

    &:hover {
      color: ${customStyles.dark_03};
      background: ${customStyles.light_01};
    }
  }
`;

const PageNotFound = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <Container>
      <h1 className="not-found-msg">
        <strong>Uh-oh!</strong>
        <br/>
        <br/>
        Page was not found.
        <FaFrown className='frown-icon' />
        <br/>
        <br/>
        <button className='go-back-btn' onClick={goBack}>Go back</button>
      </h1>
    </Container>
  );
};

export default PageNotFound;