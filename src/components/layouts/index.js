import React from 'react';
import Helmet from 'react-helmet';
import Title from '../navigation/Title';
import Navbar from '../navigation/Navbar';
import styled from 'styled-components';

const TemplateWrapper = ({ children }) => (
  <Container>
    <Title />
    <Navbar />
    <Body>{children}</Body>
  </Container>
);

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export default TemplateWrapper;
