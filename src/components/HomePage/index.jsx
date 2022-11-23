import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utils/customStyles';

const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: rgb(24, 10, 50);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 25px;
  padding: 25px;
  place-items: center;
  color: rgb(235, 235, 235);
`;

const LeftWrapper = styled.section`
  height: 60%;
  width: 100%;
  background: transparent;
`;

const RightWrapper = styled.section`
  height: 60%;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const HomePage = () => {
  return (
    <Container>
      <LeftWrapper>

      </LeftWrapper>
      <RightWrapper>
        Welcome to TIC TAC TOE.
        Welcome to TIC TAC TOE.
        Welcome to TIC TAC TOE.
      </RightWrapper>
    </Container>
  )
};

export default HomePage;