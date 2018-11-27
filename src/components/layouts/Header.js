import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/style-utils';
import { Link } from 'gatsby';

export default () => <Title to="/">Nancy Plank</Title>;

const Title = styled(Link)`
  display: flex;
  grid-area: header;
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
