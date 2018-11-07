import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layouts';
import AnimatedContainer from '../components/animation/AnimatedContainer';
import YoutubePlayer from '../components/biography/YoutubePlayer';
import About from '../components/biography/About';
import { media } from '../utilities/style-utils';

export default ({
  data: {
    markdownRemark: { html }
  }
}) => {
  return (
    <Layout>
      <Container>
        <AnimatedContainer>
          {({ handleLoad, renderAnimation }) =>
            renderAnimation(<YoutubePlayer handleLoad={handleLoad} />)
          }
        </AnimatedContainer>
        <AnimatedContainer>
          {({ handleLoad, renderAnimation }) =>
            renderAnimation(<About html={html} handleLoad={handleLoad} />)
          }
        </AnimatedContainer>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 90%;
  margin-top: 30px;
  ${media.m`
		max-width: 70%;
		margin-top: 20px;
	`};
`;

export const pageQuery = graphql`
  query BiographyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
