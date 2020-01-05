import React from 'react';
import styled from 'styled-components';

export default function SocialLink({ href, text, children }) {
  return (
    <StyledSocialLink href={href}>
      {text}
      {children}
    </StyledSocialLink>
  );
}

const StyledSocialLink = styled.a`
  display: flex;
  font-size: 2rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #747d7d;
  margin-left: 10px;
  margin-right: 10px;
`;
