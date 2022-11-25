import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  padding: 10px;
  background: #000;
  color: #fff;
`;

const Footer = () => {
  return (
    <Container>
      <strong>TIC TAC TOE</strong>, inc. &copy;
    </Container>
  );
};

export default Footer;
