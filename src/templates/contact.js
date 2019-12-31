import React from 'react';
import styled from 'styled-components';
import { useAnimation, AnimatedDiv } from '../components/animation/useAnimation';
import SocialIcon from '../components/contact/SocialIcons';
import { Helmet } from 'react-helmet';
import instagramIcon from '../svg/instagramIcon.svg';
import emailIcon from '../svg/emailIcon.svg';

export default () => {
  const { animationProps: emailAnimation, handleLoad: emailLoad } = useAnimation();
  const { animationProps: instaAnimation, handleLoad: instaLoad } = useAnimation();
  return (
    <Container>
      <Helmet title={'Contact'} />
      <Row>
        <AnimatedDiv style={emailAnimation}>
          <SocialIcon
            href={'mailto:nplank@me.com'}
            text={'NPlank@me.com'}
            src={emailIcon}
            handleLoad={emailLoad}
          />
        </AnimatedDiv>
      </Row>
      <Row>
        <AnimatedDiv style={instaAnimation}>
          <SocialIcon
            href={'https://www.instagram.com/nplank/?hl=en'}
            src={instagramIcon}
            text={'Instagram'}
            handleLoad={instaLoad}
          />
        </AnimatedDiv>
      </Row>
    </Container>
  );
};

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
