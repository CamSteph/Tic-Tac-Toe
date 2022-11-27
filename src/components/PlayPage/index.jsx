import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../containers/UserProvider';
import { customStyles } from '../../utils/customStyles';
import GameBoard from '../GameBoard';
import UserImg from '../../assets/man01.png';
import BotImg from '../../assets/robot01.png';
import { Navigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${customStyles.dark_01};
  color: ${customStyles.light_01};
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 50px;
  place-items: center;
`;

const HeaderSection = styled.section`
  width: 100%;
  min-height: 65px;
  background: rgba(255, 255, 255, 0.01);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(13.4px);
  -webkit-backdrop-filter: blur(13.4px);
  border: 1px solid rgba(255, 255, 255, 0.17);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Divider = styled.div`
  width: 1px;
  height: 60px;
  position: relative;

  ::before {
    content: 'vs';
    position: absolute;
    bottom: calc(50% - 2rem);
    right: calc(50% - 30px);
    font-size: 4rem;
    opacity: .4;
  }
`;

const UserDisplay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 20px;
  user-select: none;
`;

const BotDisplay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BotImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-left: 20px;
  user-select: none;
`;

const PlayPage = () => {

  if ( !sessionStorage.getItem('username') ) {
    return (<Navigate to='/' replace />);
  }

  const userDetails = useContext(UserContext);

  const generateBotName = () => {
    const storedBotName = sessionStorage.getItem('bot-name');
    if ( storedBotName ) return storedBotName;
    const uid = Math.floor(Math.random() * 9999999);
    const botName = `c-Bot${uid}`;
    sessionStorage.setItem('bot-name', botName);
    return botName;
  }

  const [botName, setBotName] = useState(generateBotName());

  return (
    <Container>
      <HeaderSection>
        <UserDisplay>
          <UserImage src={UserImg} alt='User image' />
          <h3>{userDetails.username || 'Guest'}</h3>
        </UserDisplay>
        <Divider></Divider>
        <BotDisplay>
          <h3>{botName}</h3>
          <BotImage src={BotImg} alt='Bot image' />
        </BotDisplay>
      </HeaderSection>
      <GameBoard botName={botName}/>
    </Container>
  );
};

export default PlayPage;