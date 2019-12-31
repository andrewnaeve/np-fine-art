import React from 'react';
import styled from 'styled-components';

export default ({ href, text, src, handleLoad }) => (
  <SocialLink href={href}>
    {text}
    <Icons src={src} onLoad={handleLoad} />
  </SocialLink>
);

const SocialLink = styled.a`
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

const Icons = styled.img`
  display: flex;
  height: 80px;
  width: 80px;
  justify-content: center;
  align-items: start;
  margin-top: 10px;
  margin-bottom: 20px;
`;
