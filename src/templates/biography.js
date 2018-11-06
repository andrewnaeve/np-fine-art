import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layouts';

export default props => {
  console.log('praz', props);
  return <Layout>p</Layout>;
};

export const biographyPageQuery = graphql`
  query BiographyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
