import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/style-utils';

export default ({ html }) => <Text dangerouslySetInnerHTML={{ __html: html }} />;

const Text = styled.div`
  margin-top: 20px;
  font-family: 'Abel', sans-serif;
  justify-content: center;
  margin-bottom: 20px;
  ${media.xs`
		font-size: 1.2rem;
	`};
  ${media.m`
		font-size: 1.6rem;
	`};
`;
