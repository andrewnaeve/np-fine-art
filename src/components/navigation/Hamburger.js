import React from 'react';
import styled from 'styled-components';

export default function HamburgerMenu({ toggleMenu }) {
  return (
    <Hamburger onClick={toggleMenu}>
      <Patty />
      <Patty />
      <Patty />
    </Hamburger>
  );
}

const Hamburger = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  left: 20px;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  flex-direction: column;
  padding-top: 4px;
  margin-bottom: 10px;
  z-index: 3;
`;

const Patty = styled.div`
  width: 35px;
  height: 4px;
  margin-bottom: 4px;
  background: #cdcdcd;
  z-index: 3;
  border-radius: 3px;
`;
