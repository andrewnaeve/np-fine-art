import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

export default ({ fluid }) => (
  <ImageWrapper>
    <StyledImage fluid={fluid} />
  </ImageWrapper>
);

const ImageWrapper = styled.div`
  max-width: 90%;
  width: 300px;
  margin-bottom: 20px;
`;

const StyledImage = styled(Img)`
  border-radius: 3px;
`;
