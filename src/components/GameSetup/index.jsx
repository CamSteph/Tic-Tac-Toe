import React, { useRef, useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { customStyles } from '../../utils/customStyles';
import TicTacToeImg from '../../assets/tic-tac-toe.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useNavigate, Navigate } from 'react-router-dom';
import { UserContext, UserDispatchContext } from '../../containers/UserProvider';

const slideDown = keyframes`
  from {
    transform: translateY(-100vh);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100vw);
  }
`;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${customStyles.dark_01};
  color: ${customStyles.light_01};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  place-items: center;
  padding: 20px;
`;

const ImageDisplay = styled.img`
  object-fit: cover;
  height: 50%;
  animation: ${slideUp} 1s;
`;

const NameSection = styled.section`
  min-height: 400px;
  width: 80%;
  background: rgba(255, 255, 255, 0.01);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(13.4px);
  -webkit-backdrop-filter: blur(13.4px);
  border: 1px solid rgba(255, 255, 255, 0.17);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  animation: ${slideDown} 1s;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 90px;
    position: relative;

    input[type='text'] {
      width: 60%;
      padding: 12px 0 10px;
      outline: none;
      border: none;
      font-size: 16px;
      position: relative;
      background: transparent;
      color: ${customStyles.light_01};
      border-bottom: 1px solid ${customStyles.light_01};
      z-index: 20;
    }
  }

  h2 {

    strong {
      color: ${customStyles.accent_01};
    }
  }

  .username-error {
    color: tomato;
    font-size: 12px;
    position: absolute;
    bottom: -5px;
    width: 100%;
  }
`;

const InputLabel = styled.label`
  opacity: .7;
  position: absolute;
  left: 0;
  top: ${props => props.isFocused ? '5px' : '35px'};
  z-index: 10;
  transition: all .4s ease;
  font-size: ${props => props.isFocused ? '12px' : '16px'};
  opacity: ${props => props.isFocused ? '.5' : '1'};
`;

const ContinueBtn = styled.button`
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

  .right-arrow {
    margin-left: 5px;
  }

  &:hover {
    color: ${customStyles.dark_03};
    background: ${customStyles.light_01};
  }
`;

const GoBack = styled.button`
  background: transparent;
  color: ${customStyles.light_01};
  transition: all .4s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: .7;
  font-size: 16px;

  &:hover {
    opacity: 1;
  }

  .arrow-left {
    margin-right: 5px;
  }
`;

const GameSetup = () => {

  if ( sessionStorage.getItem('username') ) {
    return (<Navigate to='/play' replace />);
  }

  const [inputFocused, setInputFocused] = useState(false);
  const [inputErrors, setInputErrors] = useState('');

  const inputRef = useRef();
  const errorRef = useRef();

  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  const handleInputChange = () => {
    const value = inputRef.current.value;
    validateUsername(value);
    setUserDetails({'username': value});
  };

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (  e.key === 'Enter' ) {
        const value = inputRef?.current?.value;
        if ( !value ) {
          setInputErrors('Username must not be empty');
          return;
        }
        else if ( value.length < 7 ) {
          setInputErrors('Username must be at least 7 characters');
          return;
        }
        else if ( value.length > 50 ) {
          setInputErrors('Username cannot be more than 50 characters');
          return;
        }
        setUserDetails({'username': value});
        sessionStorage.setItem('username', value);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    }

  }, []);

  const handleInputFocus = () => {
    const currentValue = inputRef.current.value;
    if ( document.activeElement === inputRef.current ) {
      setInputFocused(true);
    }
    else if ( document.activeElement !== inputRef.current && !currentValue ) {
      setInputFocused(false);
    }
  };

  const validateUsername = (username) => {
    if ( !username ) {
      setInputErrors('Username must not be empty');
      return;
    }
    else if ( username.length < 7 ) {
      setInputErrors('Username must be at least 7 characters');
      return;
    }
    else if ( username.length > 50 ) {
      setInputErrors('Username cannot be more than 50 characters');
      return;
    }
    setInputErrors('');
    return true;
  };

  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate(-1);
  };

  const goToBoard = () => {
    if ( !inputErrors && userDetails.username ) {
      sessionStorage.setItem('username', userDetails.username);
      navigate('/play');
    }
    else if ( !inputErrors && !userDetails.username ) {
      errorRef.current.innerText = 'Username must not be empty';
      errorRef.current.style.animation = 'shake 1s';
    }
    else {
      errorRef.current.style.animation = 'shake 1s';
    }
  };

  return (
    <Container>
      <NameSection>
        <GoBack onClick={goBackToHome}>
          <FaArrowLeft className='arrow-left' />
          Go back
        </GoBack>
        <h2>Enter your <strong>username</strong>:</h2>
        <div className="input-wrapper">
          <InputLabel 
            isFocused={inputFocused} 
            htmlFor='user-name'>
              Username:
          </InputLabel>
          <input 
            ref={inputRef} 
            type='text' 
            name='user-name' 
            onFocus={handleInputFocus} 
            onBlur={handleInputFocus}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <span className='username-error' ref={errorRef}>{inputErrors}</span>
        </div>
        <ContinueBtn onClick={goToBoard}>
          Continue
          <FaArrowRight className='right-arrow' />
        </ContinueBtn>
      </NameSection>
      <ImageDisplay src={TicTacToeImg} />
    </Container>
  );
};

export default GameSetup;
