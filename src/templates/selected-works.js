import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import styled from 'styled-components';
import PortfolioImage from '../components/selected-works/PortfolioImage';

const SelectedWorks = ({ data }) => {
  const portfolio = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter.portfolio[0]);
  return (
    <Layout>
      <Container>
        {portfolio.map(({ image, title, description }) => (
          <PortfolioImage key={image.id} image={image} title={title} description={description} />
        ))}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SelectedWorks;

export const SelectedWorksQuery = graphql`
  query PortfolioQuery {
    allMarkdownRemark {
      edges {
        node {
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
    }
  }
`;
