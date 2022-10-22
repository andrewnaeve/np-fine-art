import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(7);

  const interval = useRef();
  useEffect(() => {
    const { current } = interval;
    if (!current) {
      interval.current = setInterval(
        () =>
          setTimeLeft(prev => {
            if (prev > 0) {
              return prev - 1;
            }
            window.clearInterval(interval.current);
            return 0;
          }),
        1000
      );
    }
  }, []);

  // useEffect(() => {
  //   if (!timeLeft) {
  //     window.location = 'https://www.nancyplankart.com/';
  //   }
  // }, [timeLeft]);
  return (
    <Section>
      <Helmet title="Nancy Plank" />
      <Container>
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
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Container = styled.div`
  padding: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

const Header = styled.h1`
  font-size: 4em;
`;

const Text = styled.div`
  font-size: 2em;
`;
