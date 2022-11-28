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
  border-radius: 15px;
  width: 75%;
  min-width: 600px;
  min-height: 60vh;
  background: ${customStyles.dark_03};
  color: ${customStyles.light_02};
  padding: 40px;
  text-align: center;
`;

const Msg = styled.h1`
  color: ${props => {
    switch(props.status) {
      case 'winner':
        return '#4fce84';
      case 'loser':
        return '#ee6f59';
      case 'draw':
        return '#fff555';
      default:
        return customStyles.light_01;
    }
  }};
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
  padding: 10px ${props => props.invertedBtn ? '45px' : '40px'};
  border: 1px solid ${ props => props.invertedBtn ? customStyles.light_01 : customStyles.light_01};
  background: ${props => props.invertedBtn ? customStyles.light_01 : 'transparent'};
  color: ${props => props.invertedBtn ? customStyles.dark_03 : customStyles.light_01};
  font-weight: 900;
  cursor: pointer;
  transition: padding .5s ease;

  &:hover {
    padding: 10px ${props => props.invertedBtn ? '65px' : '60px'};;
  }
`;

const RecordSection = styled.div`
  width: auto;
  padding-top: 5px;

  strong {
    color: ${customStyles.accent_01};
    font-size: 20px;
  }
`;

const WinnerModal = ({
  winningUser,
  userDetails,
  isADraw,
}) => {

  const navigate = useNavigate();

  const winnerIsUser = () => {
    const currentUser = sessionStorage.getItem('username');
    return winningUser === currentUser;
  };

  const goToHomePage = () => {
    if ( confirm('Are you sure you want to leave? Your data will be lost!') ) {
      sessionStorage.clear();
      navigate('/');
    }
  };

  const refreshPage = () => {
    navigate(0);
  }

  return (
    <Container>
      <Modal>
        {
          winnerIsUser() ? (
              <Msg status='winner'>You win!</Msg>
            ) : 
            isADraw  ? (
              <Msg status='draw'>It's a DRAW!</Msg>
            ) : 
            (
              <Msg status='loser'>You lost!</Msg>
            )
        }
        <RecordSection>
          Wins: <strong>{userDetails.wins || 0}</strong>, Losses: <strong>{userDetails.losses || 0}</strong>, Draws: <strong>{userDetails.draws || 0}</strong>
        </RecordSection>
        <OptionsSection>
          <OptionBtn invertedBtn={true} onClick={refreshPage}>Play Again</OptionBtn>
          <OptionBtn onClick={goToHomePage}>Leave Game</OptionBtn>
        </OptionsSection>
      </Modal>
    </Container>
  );
};

export default WinnerModal;
