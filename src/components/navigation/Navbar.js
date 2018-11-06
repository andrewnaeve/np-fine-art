import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../utilities/style-utils';

const color = '#78D5E3';

const Navbar = () => (
  <NavContainer>
    <NavList>
      <Item>
        <StyledLink to="/selected-work" activeStyle={{ color }}>
          Selected Works
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="/biography" activeStyle={{ color }}>
          Biography
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="/cv" activeStyle={{ color }}>
          CV
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="/contact" activeStyle={{ color }}>
          Contact
        </StyledLink>
      </Item>
    </NavList>
  </NavContainer>
);

const NavContainer = styled.div`
  grid-area: navbar;
  ${media.xs`
		display: none;`};
  ${media.m`
		display: flex;`};
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #a9a9a9;
  width: 90%;
  box-shadow: 0 6px 6px -6px rgba(184, 184, 184, 0.5);
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

export default Navbar;
