import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layouts';
import AnimatedContainer from '../components/animation/AnimatedContainer';
import { media } from '../utilities/style-utils';

export default data => (
  <Layout>
    {console.log('data', data)}
    <Container>hi</Container>
  </Layout>
);

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'row'
    'left-column'
    'right-column'
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  max-height: 100%;
  grid-gap: 10px;
`;

export const pageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        curriculum_vitae {
          profilePicture {
            id
            childImageSharp {
              fluid(maxWidth: 300)
            }
          }
          publications
          education
          shows
        }
      }
    }
  }
`;
