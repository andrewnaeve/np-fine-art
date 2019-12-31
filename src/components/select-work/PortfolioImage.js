import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../utilities/style-utils';
import { useAnimation, AnimatedDiv } from '../animation/useAnimation';

export default ({
  image: {
    childImageSharp: { fluid }
  },
  title,
  description
}) => {
  const { animationProps, handleLoad } = useAnimation();
  return (
    <Wrapper>
      <AnimatedDiv style={animationProps}>
        <InnerWrapper>
          <Img fluid={fluid} onLoad={() => handleLoad()} />
          <TextContainer>
            <Title> {title} </Title>
            <Description> {description} </Description>
          </TextContainer>
        </InnerWrapper>
      </AnimatedDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const InnerWrapper = styled.div`
  align-items: center;
  flex-direction: column;
  max-width: 900px;
  width: 90%;
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  color: black;
  margin: 20px 0;
`;

const Title = styled.div`
  font-size: 1.5rem;
  display: flex;
  text-align: center;
  justify-content: center;
  font-style: italic;
  ${media.m`
    font-size: 2rem`};
`;

const Description = styled.div`
  font-size: 1.2rem;
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
  ${media.m`
		font-size: 1.5rem`};
`;
