import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../utilities/style-utils';

export default function Header() {
  return <Title to="/">Nancy Plank</Title>;
}

const Title = styled(Link)`
  display: flex;
  color: #000;
  font-weight: 500;
  text-decoration: none;
  margin: 10px auto 0 auto;
  ${media.xs`
    font-size: 3rem;
    margin-bottom: 20px;`};
  ${media.s`
    font-size: 4rem;
    margin-bottom: 20px;`};
  ${media.m`
    font-size: 5rem;
    margin-bottom: 0px;`};
`;
