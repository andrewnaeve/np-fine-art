import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from '../components/navigation/Navbar';
import styled from 'styled-components';
import MobileNav from '../components/navigation/MobileNav';
import { GlobalStyle } from './global-styles';

export default ({ children }) => (
  <Container>
    <GlobalStyle />
    <Header />
    <Navbar />
    <Body>{children}</Body>
    <Footer />
    <MobileNav />
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
  padding: 0px 2%;
`;

const Body = styled.div`
  display: flex;
  grid-area: content;
  height: 100%;
  width: 100%;
`;
