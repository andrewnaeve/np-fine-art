import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => (
  <StaticQuery
    query={graphql`
      query LandingImagecQuery {
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
      <ImageWrapper>
        <StyledImage fluid={fluid} />
      </ImageWrapper>
    )}
  />
);

const ImageWrapper = styled.div`
  position: relative;
  align-items: flex-start;
  max-width: 750px;
  width: 90%;
`;

const StyledImage = styled(Img)`
  border-radius: 3px;
`;
