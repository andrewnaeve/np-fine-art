import React from 'react';
import styled from 'styled-components';
import { useAnimation, AnimatedDiv } from '../animation/useAnimation';
import Img from 'gatsby-image';

export default function LandingImage({ fluid }) {
  const { animationProps, handleLoad } = useAnimation();
  return (
    <AnimatedDiv style={animationProps}>
      <ImageWrapper>
        <StyledImage fluid={fluid} onLoad={handleLoad} />
      </ImageWrapper>
    </AnimatedDiv>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  align-items: flex-start;
  max-width: 750px;
  width: 100%;
  margin-top: 20px;
`;

const StyledImage = styled(Img)`
  border-radius: 3px;
`;
