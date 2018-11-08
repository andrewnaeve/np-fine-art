import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

export default ({ fluid }) => (
  <ImageWrapper>
    <Img fluid={fluid} />
  </ImageWrapper>
);

const ImageWrapper = styled.div`
  align-items: flex-start;
  max-width: 300px;
`;

const StyledImage = styled(Img)`
  border-radius: 3px;
`;
