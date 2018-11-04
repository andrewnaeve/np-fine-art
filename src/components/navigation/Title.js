import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/style-utils';
import { Link } from 'gatsby';

export default () => <Title to="/">Nancy Plank</Title>;

const Title = styled(Link)`
  display: flex;
  align-self: center;
  color: #000;
  font-family: 'Abel', sans-serif;
  font-weight: 500;
  text-align: center;
  text-decoration: none;

  ${media.smallPhones`
		font-size: 4rem`};
  ${media.largePhones`
		font-size: 5rem`};
  ${media.tablets`
		font-size: 6rem;`};
  ${media.fourKay`
		font-size: 12rem`};
`;
