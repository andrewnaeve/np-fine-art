import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../utilities/style-utils';

const Navbar = () => (
  <NavContainer>
    <Padding />
    <NavList>
      <Item>
        <StyledLink to="/Selected-Works" activeStyle={{ color: '#78D5E3' }}>
          Selected Works
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="/Biography" activeStyle={{ color: '#78D5E3' }}>
          Biography
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="/CV" activeStyle={{ color: '#78D5E3' }}>
          CV
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="/Contact" activeStyle={{ color: '#78D5E3' }}>
          Contact
        </StyledLink>
      </Item>
    </NavList>
    <Padding>{/*showShoppingCartIcon(props.location.pathname)*/}</Padding>
  </NavContainer>
);

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #a9a9a9;
  box-shadow: 0 6px 6px -6px rgba(184, 184, 184, 0.5);
  padding-bottom: 20px;
  margin: 0 5% 10px 5%;
  ${media.smallPhones`
		display: none;`};
  ${media.tablets`
		display: flex;`};
`;
const NavList = styled.ul`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
const Padding = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
const Item = styled.li`
  display: flex;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  margin: 0px 15px 0px 15px;
  color: #a9a9a9;
  text-decoration: none;

  &:hover {
    color: #747d7d;
  }
  ${media.smallPhones`
	font-size: 18px;
	`};
  ${media.largePhones`
	font-size: 20px;
	`};
  ${media.tablets`
	font-size: 35px;
	`};
  ${media.fourKay`
	font-size: 45px;
	`};
`;

export default Navbar;
