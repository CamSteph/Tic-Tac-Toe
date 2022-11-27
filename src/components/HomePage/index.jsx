import React from 'react';
import styled, { keyframes } from 'styled-components';
import { customStyles } from '../../utils/customStyles';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const slideDown = keyframes`
  from {
    transform: translateY(-100vh);
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(-100vw);
  }
`;

const fadeInBtn = keyframes`
  from { 
    opacity: 0;
  }
`;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 25px;
  padding: 0 25px;
  place-items: center;
  color: rgb(235, 235, 235);
  position: relative;
  overflow: hidden;
  opacity: 1;
  background-image:  linear-gradient(${customStyles.dark_02} 4px, transparent 4px), linear-gradient(to right, ${customStyles.dark_02} 4px, ${customStyles.dark_01} 4px);
  background-size: 80px 80px;

  ::before {
    content: "X";
    position: absolute;
    top: -220px;
    left: -120px;
    color: ${customStyles.dark_02};
    font-family: 'Secular One';
    font-weight: 900;
    font-size: 580px;
    z-index: 0;
  }

  ::after {
    content: "O";
    position: absolute;
    right: -155px;
    bottom: -100px;
    color: ${customStyles.dark_02};
    font-family: 'Secular One';
    font-weight: 900;
    font-size: 450px;
    z-index: 0;
  }
`;

const Wrapper = styled.section`
  height: 60%;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;

  .get-started-btn {
    padding: 9px 20px;
    font-weight: 900;
    cursor: pointer;
    animation: ${fadeInBtn} 7s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .4s ease;
    color: ${customStyles.light_01};
    background: transparent;
    border: 1px solid ${customStyles.light_01};

    .right-arrow {
      margin-left: 5px;
    }

    &:hover {
      color: ${customStyles.dark_03};
      background: ${customStyles.light_01};
    }
  }
`;

const MsgWrapper = styled.div`
  line-height: 350%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 200px;

  .welcome-msg {
    font-family: 'Secular One';
    font-size: 2.8rem;
    animation: ${slideDown} 1.5s;
    letter-spacing: 1.7px;
    
    strong {
      font-family: 'Secular One';
      color: ${customStyles.accent_01};
    }
  }

  .get-started-msg {
    font-weight: 900;
    font-size: 20px;
    opacity: .75;
    animation: ${slideRight} 1.5s;
    animation-delay: .5s;
  }

`;

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <MsgWrapper>
          <h1 className='welcome-msg'>Welcome to <strong>TIC TAC TOE</strong></h1>
          <p className="get-started-msg">To get started, click the button below!</p>
        </MsgWrapper>
        <Link to='/game-setup'>
          <button className="get-started-btn">
            Get Started
            <FaArrowRight className='right-arrow' />
          </button>
        </Link>
      </Wrapper>
    </Container>
  )
};

export default HomePage;