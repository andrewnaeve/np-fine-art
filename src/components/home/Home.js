import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/style-utils';

const Home = props => (
  <Wrapper>
    <HomeImage src={props.url} onLoad={props.handleLoad} />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeImage = styled.img`
  display: flex;
  align-self: flex-start;
  max-height: 600px;
  max-width: 90%;
  width: auto;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  ${media.smallPhones`
		margin-top: 40px;`};
  ${media.tablets`
		max-height: 600px;
		margin-top: 30px;`};
  ${media.laptop`
		max-height: 750px;`};
`;

export default Home;
