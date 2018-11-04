import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import Navbar from '../navigation/Navbar';
import styled from 'styled-components';

export default ({ children }) => (
  <Container>
    <Header />
    <Navbar />
    <Body>{children}</Body>
    <Footer />
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'navbar'
    'content'
    'footer';
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
  grid-gap: 10px;
`;

const Body = styled.div`
  display: flex;
  grid-area: content;
  height: 100%;
  width: 100%;
`;
