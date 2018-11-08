import React from 'react';
import styled from 'styled-components';

export default ({ markup }) => (
  <Container>
    <div dangerouslySetInnerHTML={{ __html: markup }} />
  </Container>
);

const Container = styled.div`
  display: flex;
`;
