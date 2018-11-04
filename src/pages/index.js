import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layouts';

import Img from 'gatsby-image';
import { media } from '../utilities/style-utils';
import './global.css';

const IndexPage = ({ data }) => {
  const {
    landingImage: {
      childImageSharp: { fluid }
    }
  } = data;

  return (
    <Layout>
      <Section>
        <ImageWrapper>
          <StyledImage fluid={fluid} />
        </ImageWrapper>
      </Section>
    </Layout>
  );
};

const Section = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ImageWrapper = styled.div`
  position: relative;
  align-items: flex-start;
  max-width: 700px;
  width: 90%;
`;

const StyledImage = styled(Img)`
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  /* ${media.smallPhones`
		margin-top: 40px;`};
  ${media.tablets`
		max-height: 600px;
		margin-top: 30px;`};
  ${media.laptop`
		max-height: 750px;`}; */
`;

export const pageQuery = graphql`
  query IndexQuery {
    landingImage: file(relativePath: { eq: "lavendar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
