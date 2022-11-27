import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utils/customStyles';

const Container = styled.div`
  width: 70vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${customStyles.dark_01};
`;

const Wrapper = styled.div`
  width: 38%;
  height: 50%;
  border: 15px solid ${props => !props.showing ? 'transparent' : 'grey'};
  border-radius: 100%;
  display: grid;
  place-items: center;
`;

const CounterNumber = styled.span`
  font-size: 8rem;
  color: ${customStyles.accent_01};
  width: 100%;
  text-align: center;
`;

const CountdownTimer = ({timeValue = 1000, setGameHasStarted}) => {

  const [time, setTime] = useState(new Date().getTime());
  const [newTime, setNewTime] = useState(4);

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date().getTime();
      const updatedTime = time - now;
      const diff = Math.abs(Math.floor((updatedTime % (1000 * 60)) / 1000));

      if ( diff >= 5 ) {
        setGameHasStarted(true);
      }
      else {
        switch( diff ) {
          case 4:
            setNewTime(1);
            break;
          case 3:
            setNewTime(2);
            break;
          case 2:
            setNewTime(3);
            break;
          case 1:
            setNewTime(4);
            break;
          default:
            setNewTime(1);
            return;
        }
      }

    }, timeValue);
  
    return () => {
      clearInterval(timer);
    }
  });

  return (
    <Container>
      <Wrapper showing={newTime > 1}>
        <CounterNumber>{newTime > 1 ? newTime : 'Go!'}</CounterNumber>
      </Wrapper>
    </Container>
  );
};

export default CountdownTimer;