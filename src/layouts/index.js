import React from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Navbar from '../components/navigation/Navbar';
import styled from 'styled-components';
import MobileNav from '../components/navigation/MobileNav';
import { GlobalStyle } from './global-styles';
import 'typeface-abel';

export default function Layout({ children }) {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Separator />
      <Body>{children}</Body>
      <Footer />
      <MobileNav />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 100%;
  min-height: 100vh;
  align-items: center;
  padding: 0px 20px;
`;

const Separator = styled.div`
  border-top: 1px solid #a9a9a9;
  height: 1px;
  width: 90%;
  color: black;
  margin-bottom: 20px;
`;

const Body = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
`;
