import React from 'react';
import styled from 'styled-components';
import EmailIcon from '../../assets/svg/emailIcon.svg';
import InstagramIcon from '../../assets/svg/instagramIcon.svg';
import SocialLink from './SocialIcons';

const Email = styled(EmailIcon)`
  display: flex;
  height: 80px;
  width: 80px;
  justify-content: center;
  align-items: start;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Instagram = styled(InstagramIcon)`
  display: flex;
  height: 80px;
  width: 80px;
  justify-content: center;
  align-items: start;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export default new Map([
  [
    'email',
    <SocialLink href="mailto:nplank@me.com" text="NPlank@me.com">
      <Email />
    </SocialLink>
  ],
  [
    'instagram',
    <SocialLink href="https://www.instagram.com/nplank/?hl=en/>" text="Instagram">
      <Instagram />
    </SocialLink>
  ]
]);
