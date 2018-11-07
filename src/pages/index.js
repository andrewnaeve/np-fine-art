import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts';
import LandingImage from '../components/home/LandingImage';
import './global.css';

export default () => {
  return (
    <Layout>
      <Section>
        <LandingImage />
      </Section>
    </Layout>
  );
};

const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

// export const pageQuery = graphql`
//   query indexQuery($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         landing-mage {
// childImageSharp {
//   fluid(maxWidth: 700) {
//     ...GatsbyImageSharpFluid_withWebp_noBase64
//   }
// }
//         }
//       }
//     }
//   }
// `;
