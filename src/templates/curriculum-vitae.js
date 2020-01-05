import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { media } from '../utilities/style-utils';
import NancyPlank from '../components/curriculum-vitae/NancyPlank';
import Publications from '../components/curriculum-vitae/Publications';
import Shows from '../components/curriculum-vitae/Shows';
import Education from '../components/curriculum-vitae/Education';

export default ({
  data: {
    markdownRemark: { frontmatter }
  }
}) => {
  const {
    profilePicture: {
      childImageSharp: { fluid }
    }
  } = frontmatter;

  return (
    <Container>
      <Helmet title="Curriculum Vitae" />
      <Row>
        <NancyPlank fluid={fluid} />
      </Row>
      <LeftColumn>
        <Publications />
        <Shows />
      </LeftColumn>
      <RightColumn>
        <Education />
      </RightColumn>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'row row'
    'leftColumn rightColumn';
  grid-template-rows: 320px 1fr;
  grid-template-columns: 1fr 1fr;
  max-height: 100%;
  grid-gap: 10px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  grid-area: row;
  align-items: center;
  justify-content: center;
  ${media.m`
    justify-content: flex-start;`};
`;

const LeftColumn = styled.div`
  grid-area: leftColumn;
`;
const RightColumn = styled.div`
  grid-area: rightColumn;
`;

export const pageQuery = graphql`
  query CvPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        profilePicture {
          id
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
