import React from 'react';
import styled from 'styled-components';
import 'typeface-abel';
import GlobalStyle from './global-styles';

export default function Layout({ children }) {
  return (
    <Container>
      <GlobalStyle />
      <Body>{children}</Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 100%;
  height: 100vh;
  align-items: center;
  padding: 0px 20px;
`;

const Body = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
`;
