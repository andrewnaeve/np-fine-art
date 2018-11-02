import React from 'react';

// import PropTypes from 'prop-types';
// import { Link, graphql } from 'gatsby';
import Layout from '../components/layouts';
import '../utilities/global.css';

const IndexPage = ({ data }) => {
  // const { data } = this.props;
  // const { edges: posts } = data.allMarkdownRemark;
  return (
    <>
      <Layout>
        <section className="section">
          <h1 style={{ fontFamily: 'Abel' }}>Hello, Nancy Plank</h1>
        </section>
      </Layout>
    </>
  );
};

export default IndexPage;
