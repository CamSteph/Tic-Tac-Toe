import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utils/customStyles';
import WinnerModal from '../WinnerModal';
import { UserContext } from '../../containers/UserProvider';

const BoardContainer = styled.main`
  width: 90%;
  max-width: 800px;
  height: 100%;
  min-height: 400px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  place-items: center;
  background: ${customStyles.dark_02}77;
  padding: 20px;
  border-radius: 15px;
`;

const Tile = styled.div`
  height: 10rem;
  width: 100%;
  min-width: 200px;
  max-width: 350px;
  border: 1px solid ${customStyles.accent_01};
  display: grid;
  place-items: center;

  &:first-child {
    border-left: none;
    border-top: none;
  }

  &:last-child {
    border-bottom: none;
    border-right: none;
  }

  &:nth-child(2) {
    border-top: none;
  }

  &:nth-child(3) { 
    border-top: none;
    border-right: none;
  }

  &:nth-child(4) { 
    border-left: none;
  }

  &:nth-child(6) { 
    border-right: none;
  }

  &:nth-child(7) { 
    border-left: none;
    border-bottom: none;
  }

  &:nth-child(8) { 
    border-bottom: none;
  }  

  &:hover::before {
    content: 'X';
    position: absolute;
    color: ${sessionStorage.getItem('user-color') || '#01b3e0'};
    opacity: .5;
    font-size: 5.5rem;
    font-family: 'Secular One', sans-serif;
  }

  .selector {
    font-size: 5.5rem;
    font-family: 'Secular One', sans-serif;
    text-align: center;
    color: ${customStyles.light_01};
    cursor: default;
    user-select: none;
    display: grid;
    place-items: center;

    &.x-user {
      color: #01b3e0;
    }

    &.o-user {
      color: #c5b500;
    }
  }
`;

const GameBoard = ({botName}) => {

  const [winner, setWinner] = useState(null);
  const userDetails = useContext(UserContext);

  const arrOfTiles = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];

  const checkWinner = () => {
      if ( arrOfTiles[0] && arrOfTiles[0] === arrOfTiles[1] && arrOfTiles[1] === arrOfTiles[2] ) {
        setWinner(arrOfTiles[0]);
        return true;
      }
      else if ( arrOfTiles[3] && arrOfTiles[3] === arrOfTiles[4] && arrOfTiles[4] === arrOfTiles[5] ) {
        setWinner(arrOfTiles[3]);
        return true;
      }
      else if ( arrOfTiles[6] && arrOfTiles[6] === arrOfTiles[7] && arrOfTiles[7] === arrOfTiles[8]) {
        setWinner(arrOfTiles[6]);
        return true;
      }
      else if ( arrOfTiles[0] && arrOfTiles[0] === arrOfTiles[3] && arrOfTiles[3] === arrOfTiles[6]) {
        setWinner(arrOfTiles[0]);
        return true;
      }
      else if ( arrOfTiles[1] && arrOfTiles[1] === arrOfTiles[4] && arrOfTiles[4] === arrOfTiles[7]) {
        setWinner(arrOfTiles[1]);
        return true;
      }
      else if ( arrOfTiles[2] && arrOfTiles[2] === arrOfTiles[5] && arrOfTiles[5] === arrOfTiles[8]) {
        setWinner(arrOfTiles[2]);
        return true;
      }
      else if ( arrOfTiles[2] && arrOfTiles[2] === arrOfTiles[4] && arrOfTiles[4] === arrOfTiles[6]) {
        setWinner(arrOfTiles[2]);
        return true;
      }
      else if ( arrOfTiles[0] && arrOfTiles[0] === arrOfTiles[4] && arrOfTiles[4] === arrOfTiles[8]) {
        setWinner(arrOfTiles[0]);
        return true;
      }
      return false;
  };

  const handleBotMove = () => {
      if ( !winner ) {
        for ( let i = 0; i < arrOfTiles.length; i++ ) {
          const randomSpace = Math.floor(Math.random() * 9);
          if ( !arrOfTiles[randomSpace] ) {
            const tileEl = document.getElementById(`tile-${randomSpace + 1}`);
            const selectorEl = document.createElement('span');
            selectorEl.classList.add('selector');
            selectorEl.classList.add('o-user');
            selectorEl.innerText = 'O';
            tileEl.appendChild(selectorEl);
            arrOfTiles[randomSpace] = 'O';
            setTimeout(() => checkWinner(), 500);
            return;
          }
        }
      }
  };

  const handleTileClick = (e, i) => {
    if ( !e.target.hasChildNodes() && !winner) {
      const el = document.createElement('span');
      el.classList.add('selector');
      el.classList.add('x-user');
      el.innerText = 'X';
      e.target.appendChild(el);
      arrOfTiles[i] = 'X';

      setTimeout(() => {
        if ( !checkWinner() ) handleBotMove();
      }, 500);
    }
  };

  return (
    <>
      {winner && <WinnerModal winningUser={winner === 'X' ? userDetails.username : botName } />}
      <BoardContainer>
        {
          arrOfTiles.map((_, i) => (
            <Tile key={i} onClick={(e) => handleTileClick(e, i)} id={`tile-` + (i + 1)}>
            </Tile>
          ))
        }
      </BoardContainer>
    </>
  );
};

export default GameBoard;