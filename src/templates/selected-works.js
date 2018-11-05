import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import styled from 'styled-components';
import { media } from '../utilities/style-utils';

export const SelectedWorksTemplate = ({
  image: {
    childImageSharp: { fluid }
  },
  title,
  description
}) => (
  <Wrapper>
    <Img fluid={fluid} />
    <TextContainer>
      <Title> {title} </Title>
      <Description> {description} </Description>
    </TextContainer>
  </Wrapper>
);

const SelectedWorks = ({ data = {} }) => {
  const [portfolio] = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter.portfolio);
  return (
    <Layout>
      <Container>
        {portfolio.map(({ image, title, description }) => (
          <SelectedWorksTemplate
            key={image.id}
            image={image}
            title={title}
            description={description}
          />
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

const Wrapper = styled.div`
  display: flex;
  max-width: 900px;
  width: 90%;
  flex-direction: column;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  font-family: 'Abel', sans-serif;
  width: 100%;
  justify-content: center;
  color: black;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
  font-style: italic;
  ${media.m`
		font-size: 2rem`};
`;

const Description = styled.div`
  font-size: 1.2rem;
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
  ${media.m`
		font-size: 1.5rem`};
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
                  fluid(maxWidth: 1200) {
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
