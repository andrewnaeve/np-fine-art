import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import { Link } from 'gatsby';
import { media } from '../../utilities/style-utils';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <Container open={open}>
      <Hamburger toggleMenu={toggleMenu} />
      <LinkWrapper open={open}>
        <QuickLink to="/" onClick={toggleMenu} activeStyle={{ color: '#78D5E3' }}>
          Home
        </QuickLink>
        <QuickLink to="/select-work" onClick={toggleMenu} activeStyle={{ color: '#78D5E3' }}>
          Select Works
        </QuickLink>
        <QuickLink to="/biography" onClick={toggleMenu} activeStyle={{ color: '#78D5E3' }}>
          Biography
        </QuickLink>
        <QuickLink to="/curriculum-vitae" onClick={toggleMenu} activeStyle={{ color: '#78D5E3' }}>
          CV
        </QuickLink>
        <QuickLink to="/contact" onClick={toggleMenu} activeStyle={{ color: '#78D5E3' }}>
          Contact
        </QuickLink>
      </LinkWrapper>
    </Container>
  );
}

const Container = styled.div`
  ${media.m`
		display: none;`};
  position: fixed;
  bottom: 0;
  left: 0;
  transform: ${({ open }) => `translate3d(0, ${open ? 0 : 200}px, 0)`};
  height: 260px;
  width: 100vw;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease;
  z-index: 2;
  will-change: transform;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  transition: opacity;
  ${({ open }) => {
    if (open) {
      return `
        opacity: 1; 
        transition-delay: 0s;
      `;
    } else {
      return `
        opacity: 0;
        transition-delay: 0.3s;
      `;
    }
  }}
`;

const QuickLink = styled(Link)`
  display: flex;
  font-size: 1.75rem;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
`;
