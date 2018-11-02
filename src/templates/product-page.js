import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const ProductPageTemplate = ({ image, title, description }) => (
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

ProductPageTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string
};

const ProductPage = ({ data }) => {
  const {
    frontmatter: { portfolio }
  } = data.markdownRemark;
  return (
    <Layout>
      {portfolio.map(({ title, description, image }) => (
        <ProductPageTemplate key={title} image={image} title={title} description={description} />
      ))}
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        portfolio {
          title
          description
          image
        }
      }
    }
  }
`;
