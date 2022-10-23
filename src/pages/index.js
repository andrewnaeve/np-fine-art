import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(4);

  const interval = useRef();
  useEffect(() => {
    const { current } = interval;
    if (!current) {
      interval.current = setInterval(
        () =>
          setTimeLeft(prev => {
            return prev > 0 ? prev - 1 : 0;
          }),
        1000
      );
    }
  }, []);

  useEffect(() => {
    if (!timeLeft) {
      window.location = 'https://www.nancyplankart.com/';
    }
  }, [timeLeft]);

  return (
    <Container>
      <Helmet title="Nancy Plank" />
      <Header>This site has moved!</Header>
      <Text>
        Please update your bookmarks to{' '}
        <a
          target="_blank2"
          referrerPolicy="no-referrer"
          rel="noopener"
          href="https://www.nancyplankart.com"
        >
          nancyplankart.com
        </a>
      </Text>
      <Text>You will be redirected in </Text>
      <Text>{timeLeft}</Text>
    </Container>
  );
}

const Container = styled.div`
  padding: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 12px;
`;

const Header = styled.h1`
  font-size: 3em;
`;

const Text = styled.div`
  font-size: 2em;
  margin: 6px;
`;
