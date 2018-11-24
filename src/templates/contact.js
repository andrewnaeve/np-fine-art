import React from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../components/animation/AnimatedContainer';
import { Instagram, Email } from '../components/contact/SocialIcons';
import { Helmet } from 'react-helmet';

export default () => (
  <Container>
    <Helmet title={'Contact'} />
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
  background-color: transparent;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
