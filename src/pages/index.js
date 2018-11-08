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
