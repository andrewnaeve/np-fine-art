import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import AnimatedContainer from '../animation/AnimatedContainer';

export default ({ fluid }) => (
  <ImageWrapper>
    <AnimatedContainer>
      {({ handleLoad, animatePosition }) =>
        animatePosition(
          <InnerWrapper>
            <StyledImage fluid={fluid} onLoad={() => handleLoad()} />
          </InnerWrapper>
        )
      }
    </AnimatedContainer>
  </ImageWrapper>
);

const ImageWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 10px;
`;

const StyledImage = styled(Img)`
  border-radius: 3px;
`;

const InnerWrapper = styled.div`
  max-width: 100%;
  width: 300px;
`;
