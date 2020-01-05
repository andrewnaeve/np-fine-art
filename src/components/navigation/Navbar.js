import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../utilities/style-utils';

const color = '#78D5E3';

export default function Navbar() {
  return (
    <NavContainer>
      <NavList>
        <Item>
          <StyledLink to="/select-work/" activeStyle={{ color }}>
            Select Work
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="/biography/" activeStyle={{ color }}>
            Biography
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="/curriculum-vitae/" activeStyle={{ color }}>
            CV
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="/contact/" activeStyle={{ color }}>
            Contact
          </StyledLink>
        </Item>
      </NavList>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  ${media.xs`
		display: none;`};
  ${media.m`
		display: flex;`};
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px 0;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Item = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  font-size: 30px;
  margin: 0px 15px 0px 15px;
  color: #a9a9a9;
  text-decoration: none;
  &:hover {
    color: #747d7d;
  }
`;
