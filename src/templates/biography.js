import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layouts';

export default ({
  data: {
    markdownRemark: { html }
  }
}) => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BiographyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
