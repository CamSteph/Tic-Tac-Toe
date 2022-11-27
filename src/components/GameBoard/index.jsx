import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utils/customStyles';
import WinnerModal from '../WinnerModal';
import { UserContext, UserDispatchContext } from '../../containers/UserProvider';
import CountdownTimer from '../CountdownTimer';

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
  height: 14rem;
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

  /* &:hover::before {
    content: 'X';
    position: absolute;
    color: ${sessionStorage.getItem('user-color') || '#01b3e0'};
    opacity: .5;
    font-size: 9.5rem;
    font-family: 'Secular One', sans-serif;
  } */

  &:hover {
    background: ${customStyles.dark_01};
  }

  .selector {
    font-size: 9.5rem;
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
  const setUserDetails = useContext(UserDispatchContext);
  const [gameHasStarted, setGameHasStarted] = useState(false);

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

  const tallyScore = (winningMark) => {

    const updateResults = (data, column) => {

      switch ( column ) {
        case 'wins':
          setUserDetails(prev => {
            const newWinCount = Number( data ) > 0 ? Number( data ) + 1 : 1;
            sessionStorage.setItem('wins', newWinCount);
            return {...prev, 'wins': newWinCount, 'losses': prev.losses};
          });
          break;
        case 'losses':
          setUserDetails(prev => {
            const newLossCount = Number( data ) > 0 ? Number( data ) + 1 : 1;
            sessionStorage.setItem('losses', newLossCount);
            return {...prev, 'losses': newLossCount, 'wins': prev.wins};
          });
          break;
        case 'draws':
          setUserDetails(prev => {
            const newDrawCount = Number( data ) > 0 ? Number( data ) + 1 : 1;
            sessionStorage.setItem('draws', newDrawCount);
            return {...prev, 'draws': newDrawCount};
          });
          break;

        default: return;
      }
    };

    if ( winningMark === 'X' ) {
      updateResults(sessionStorage.getItem('wins'), 'wins');
    }
    else if ( winningMark === 'O' ) {
      updateResults(sessionStorage.getItem('losses'), 'losses');
    }
    else {
      updateResults(sessionStorage.getItem('draws'), 'draws');
    }

  };

  const checkWinner = (mark) => {
      console.log(mark);
      if ( arrOfTiles[0] === mark && arrOfTiles[0] === arrOfTiles[1] && arrOfTiles[1] === arrOfTiles[2] ) {
        setWinner(arrOfTiles[0]);
        tallyScore(arrOfTiles[0]);
        return true;
      }
      else if ( arrOfTiles[3] === mark && arrOfTiles[3] === arrOfTiles[4] && arrOfTiles[4] === arrOfTiles[5] ) {
        setWinner(arrOfTiles[3]);
        tallyScore(arrOfTiles[3]);
        return true;
      }
      else if ( arrOfTiles[6] === mark && arrOfTiles[6] === arrOfTiles[7] && arrOfTiles[7] === arrOfTiles[8]) {
        setWinner(arrOfTiles[6]);
        tallyScore(arrOfTiles[6]);
        return true;
      }
      else if ( arrOfTiles[0] === mark && arrOfTiles[0] === arrOfTiles[3] && arrOfTiles[3] === arrOfTiles[6]) {
        setWinner(arrOfTiles[0]);
        tallyScore(arrOfTiles[0]);
        return true;
      }
      else if ( arrOfTiles[1] === mark && arrOfTiles[1] === arrOfTiles[4] && arrOfTiles[4] === arrOfTiles[7]) {
        setWinner(arrOfTiles[1]);
        tallyScore(arrOfTiles[1]);
        return true;
      }
      else if ( arrOfTiles[2] === mark && arrOfTiles[2] === arrOfTiles[5] && arrOfTiles[5] === arrOfTiles[8]) {
        setWinner(arrOfTiles[2]);
        tallyScore(arrOfTiles[2]);
        return true;
      }
      else if ( arrOfTiles[2] === mark && arrOfTiles[2] === arrOfTiles[4] && arrOfTiles[4] === arrOfTiles[6]) {
        setWinner(arrOfTiles[2]);
        tallyScore(arrOfTiles[2]);
        return true;
      }
      else if ( arrOfTiles[0] === mark && arrOfTiles[0] === arrOfTiles[4] && arrOfTiles[4] === arrOfTiles[8]) {
        setWinner(arrOfTiles[0]);
        tallyScore(arrOfTiles[0]);
        return true;
      }
      return false;

  };

  const handleBotMove = () => {
      if ( !winner ) {
        for ( let i = 0; i < arrOfTiles.length; i++ ) {
          const randomSpace = Math.floor(Math.random() * 9);
          const tileEl = document.getElementById(`tile-${randomSpace + 1}`);
          if ( !arrOfTiles[randomSpace] && !tileEl.hasChildNodes()) {
            const selectorEl = document.createElement('span');
            selectorEl.classList.add('selector');
            selectorEl.classList.add('o-user');
            selectorEl.innerText = 'O';
            tileEl.appendChild(selectorEl);
            arrOfTiles[randomSpace] = 'O';

            setTimeout(() => {
              if ( !winner ) {
                checkWinner('O');
              }
          }, 500);
            return;
          }
        }
      }
  };

  const handleTileClick = (e, i) => {
    if ( !e.target.hasChildNodes() && !winner ) {
      const el = document.createElement('span');
      el.classList.add('selector');
      el.classList.add('x-user');
      el.innerText = 'X';
      e.target.appendChild(el);
      arrOfTiles[i] = 'X';
      
      setTimeout(() => {
        if ( !checkWinner('X') ) {
          handleBotMove();
        }
      }, 500);
    }
  };

  useEffect(() => {
    console.log('useEffect: ', sessionStorage.getItem('wins'));
  }, [])

  return (
    <>
      {
        winner && (
        <WinnerModal 
          winningUser={winner.toUpperCase() === 'X' ? userDetails.username : botName } 
          userDetails={userDetails} 
          setWinner={setWinner} 
        />)
      }
      {
        !gameHasStarted ? (
          <CountdownTimer setGameHasStarted={setGameHasStarted} timeValue={1000} />
        ) : (
          <BoardContainer>
            {arrOfTiles.map((_, i) => (
              <Tile key={i} onClick={(e) => handleTileClick(e, i)} id={`tile-` + (i + 1)}>
              </Tile>
            ))}
          </BoardContainer>
        )
      }
      {/* <BoardContainer>
        {
          !gameHasStarted ? (
            <CountdownTimer setGameHasStarted={setGameHasStarted} timeValue={1000} />
          ) : (
            arrOfTiles.map((_, i) => (
              <Tile key={i} onClick={(e) => handleTileClick(e, i)} id={`tile-` + (i + 1)}>
              </Tile>
            ))
          )
        }
      </BoardContainer> */}
    </>
  );
};

export default GameBoard;
