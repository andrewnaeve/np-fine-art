import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PortfolioImage from '../components/select-work/PortfolioImage';
import { Helmet } from 'react-helmet';

export default ({
  data: {
    markdownRemark: {
      frontmatter: { portfolio }
    }
  }
}) => {
  return (
    <Container>
      <Helmet title={'Select Work'} />
      {portfolio.map(({ image, title, description }) => (
        <PortfolioImage key={image.id} image={image} title={title} description={description} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const pageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        portfolio {
          description
          title
          image {
            id
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
