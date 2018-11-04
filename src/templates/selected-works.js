import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';

export const SelectedWorksTemplate = ({ image, title, description }) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${image})` }}
              >
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem'
                  }}
                >
                  {title}
                  {description}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SelectedWorks = ({ data }) => {
  console.log('data', data);
  return (
    <Layout>
      {/* {portfolio.map(({ title, description, image }) => (
        <SelectedWorksTemplate key={title} image={image} title={title} description={description} />
      ))} */}
    </Layout>
  );
};

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
                    src
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
