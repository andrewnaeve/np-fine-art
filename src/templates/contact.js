import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts';
import AnimatedContainer from '../components/animation/AnimatedContainer';
import { Instagram, Email } from '../components/contact/SocialIcons';

export default () => (
  <Layout>
    <Container>
      <Row>
        <AnimatedContainer>
          {({ handleLoad, renderAnimation }) =>
            renderAnimation(<Email title={'Email'} handleLoad={handleLoad} />)
          }
        </AnimatedContainer>
      </Row>
      <Row>
        <AnimatedContainer>
          {({ handleLoad, renderAnimation }) =>
            renderAnimation(<Instagram title={'Instagram'} handleLoad={handleLoad} />)
          }
        </AnimatedContainer>
      </Row>
    </Container>
  </Layout>
);

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  max-width: 60%;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Row = styled.div`
  display: flex;
  font-family: 'Abel', sans-serif;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
