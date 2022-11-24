import React from 'react';
import styled, { keyframes} from 'styled-components';
import { customStyles } from '../../utils/customStyles';
import googleFonts from '../../utils/googleFonts.module.css';
import { FaArrowRight } from 'react-icons/fa';

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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 25px;
  padding: 0 25px;
  place-items: center;
  color: rgb(235, 235, 235);
  position: relative;
  overflow: hidden;

  background-color: #0e1118;
  opacity: 1;
  background-image:  linear-gradient(#050507 4px, transparent 4px), linear-gradient(to right, #050507 4px, #0e1118 4px);
  background-size: 80px 80px;

  ::before {
    content: "X";
    position: absolute;
    top: -220px;
    left: -120px;
    color: #050507;
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
    color: #050507;
    font-family: 'Secular One';
    font-weight: 900;
    font-size: 450px;
    z-index: 0;
  }
`;

const LeftWrapper = styled.section`
  height: 60%;
  width: 100%;
  background: transparent;
  z-index: 5;
`;

const RightWrapper = styled.section`
  height: 60%;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    color: #fff;
    background: transparent;
    border: 1px solid #fff;

    .right-arrow {
      margin-left: 5px;
    }

    &:hover {
      color: #000;
      background: #fff;
    }
  }
`;

const MsgWrapper = styled.div`
  line-height: 350%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  min-height: 200px;

  .welcome-msg {
    font-size: 2.8rem;
    animation: ${slideDown} 2s;

    strong {
      color: #689ac2;
    }
  }

  .get-started-msg {
    font-weight: 900;
    opacity: .75;
    animation: ${slideRight} 2s;
    animation-delay: .5s;
  }

`;

const HomePage = () => {
  return (
    <Container>
      <LeftWrapper>

      </LeftWrapper>
      <RightWrapper>
        <MsgWrapper>
          <h1 className='welcome-msg'>Welcome to <strong>TIC TAC TOE</strong>!</h1>
          <p className="get-started-msg">Click the button below to begin the game.</p>
        </MsgWrapper>
        <button className="get-started-btn">
          Get Started
          <FaArrowRight className='right-arrow' />
        </button>
      </RightWrapper>
    </Container>
  )
};

export default HomePage;