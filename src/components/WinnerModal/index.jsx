import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { customStyles } from '../../utils/customStyles';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #0a0a0ae5;
  display: grid;
  place-items: center;
  color: ${customStyles.light_01};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Modal = styled.main`
  width: 75%;
  min-width: 600px;
  min-height: 60vh;
  background: ${customStyles.dark_03};
  color: ${customStyles.light_02};
  padding: 40px;
  text-align: center;
`;

const Msg = styled.h1`
  color: ${props => props.winner ? '#4fce84' : '#ee6f59'};
  text-transform: uppercase;
  font-family: 'Secular One';
`;

const OptionsSection = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const OptionBtn = styled.button`
  outline: none;
  border: none;
  padding: 10px 40px;
  border: 1px solid ${ props => props.invertedBtn ? customStyles.light_01 : customStyles.light_01};
  background: ${props => props.invertedBtn ? customStyles.light_01 : 'transparent'};
  color: ${props => props.invertedBtn ? customStyles.dark_03 : customStyles.light_01};
  font-weight: 900;
  cursor: pointer;
  transition: padding .5s ease;

  &:hover {
    padding: 10px 60px;
  }
`;

const RecordSection = styled.div`
  width: auto;

`;

const WinnerModal = ({winningUser}) => {

  const navigate = useNavigate();

  const winnerIsUser = () => {
    const currentUser = sessionStorage.getItem('username');
    console.log(currentUser);
    return winningUser === currentUser;
  };

  const goToHomePage = () => {
    navigate('/');
  }

  return (
    <Container>
      <Modal>
        {
          winnerIsUser() ?
            (<Msg winner={true}>You win!</Msg>)
          :
            (<Msg>You lost!</Msg>)
        }
        <RecordSection>
          Wins: 3, Losses: 2
        </RecordSection>
        <OptionsSection>
          <OptionBtn>Play Again</OptionBtn>
          <OptionBtn invertedBtn={true} onClick={goToHomePage}>Go Home</OptionBtn>
        </OptionsSection>
      </Modal>
    </Container>
  );
};

export default WinnerModal;