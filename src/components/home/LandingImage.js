import React from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../animation/AnimatedContainer';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => (
  <StaticQuery
    query={graphql`
      query LandingImageQuery {
        landingImage: file(relativePath: { eq: "lavendar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={({ landingImage: { childImageSharp: { fluid = {} } = {} } = {} }) => (
      <AnimatedContainer>
        {({ handleLoad, animatePosition }) =>
          animatePosition(
            <ImageWrapper>
              <StyledImage fluid={fluid} onLoad={() => handleLoad()} />
            </ImageWrapper>
          )
        }
      </AnimatedContainer>
    )}
  />
);

const ImageWrapper = styled.div`
  position: relative;
  align-items: flex-start;
  max-width: 750px;
  width: 100%;
  margin-top: 10px;
`;

const StyledImage = styled(Img)`
  border-radius: 3px;
`;
