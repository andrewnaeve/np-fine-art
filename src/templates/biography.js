import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useAnimation, AnimatedDiv } from '../components/animation/useAnimation';
import YoutubePlayer from '../components/biography/YoutubePlayer';
import About from '../components/biography/About';
import { media } from '../utilities/style-utils';
import { Helmet } from 'react-helmet';

export default ({
  data: {
    markdownRemark: { html }
  }
}) => {
  const { animationProps, handleLoad } = useAnimation();
  return (
    <Container>
      <Helmet title={'Biography'} />
      <Wrapper>
        <AnimatedDiv style={animationProps}>
          <YoutubePlayer handleLoad={handleLoad} />)
        </AnimatedDiv>
      </Wrapper>
      <About html={html} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 98%;
  ${media.m`
    max-width: 900px;
`};
`;

export const pageQuery = graphql`
  query BiographyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
