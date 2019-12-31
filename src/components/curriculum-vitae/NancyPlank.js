import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useAnimation, AnimatedDiv } from '../animation/useAnimation';

export default ({ fluid }) => {
  const { animationProps, handleLoad } = useAnimation();
  return (
    <ImageWrapper>
      <AnimatedDiv style={animationProps}>
        <InnerWrapper>
          <StyledImage fluid={fluid} onLoad={() => handleLoad()} />
        </InnerWrapper>
      </AnimatedDiv>
    </ImageWrapper>
  );
};

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
