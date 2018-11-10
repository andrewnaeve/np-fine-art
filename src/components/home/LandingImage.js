import React from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../animation/AnimatedContainer';
import Img from 'gatsby-image';

export default ({ fluid }) => (
  <AnimatedContainer>
    {({ handleLoad, animatePosition }) =>
      animatePosition(
        <ImageWrapper>
          <StyledImage
            fluid={fluid}
            onLoad={() => {
              handleLoad();
            }}
          />
        </ImageWrapper>
      )
    }
  </AnimatedContainer>
);

const ImageWrapper = styled.div`
  position: relative;
  align-items: flex-start;
  max-width: 750px;
  width: 100%;
  margin-top: 10px;
`;

const StyledImage = styled(Img)`
  border-radius: 3px;
`;
