import React from 'react';
import styled from 'styled-components';
import { customStyles } from '../../utils/customStyles';
// import * as Lottie from 'react-lottie';
import confettiAnimationData from '../../assets/lotties/confetti.json';
import lottie from 'lottie-web';

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

const WinnerModal = ({winningUser}) => {

  const winnerIsUser = () => {
    const currentUser = sessionStorage.getItem('username');
    return winningUser === currentUser;
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: confettiAnimationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice"
    // }
  };

  return (
    <Container>
      {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
      {
        lottie.loadAnimation({
          container: <Container />, // the dom element that will contain the animation
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: confettiAnimationData, // the path to the animation json
        })
      }
      {
        winnerIsUser() ?
          (
            <Modal>
              Congratulations! You win!
            </Modal>
          )
        :
          (
            <Modal>
              {winningUser} wins!
            </Modal>
          )
      }
    </Container>
  );
};

export default WinnerModal;