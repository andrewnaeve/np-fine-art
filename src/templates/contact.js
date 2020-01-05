import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';
import { Helmet } from 'react-helmet';
import iconConfig from '../components/contact/iconConfig';

export default function Contact() {
  const [loaded, set] = useState(false);
  const icons = [...iconConfig.keys()];
  const trail = useTrail(icons.length, {
    opacity: loaded ? 1 : 0,
    transform: `translate3d(0, ${loaded ? 0 : 10}px, 0)`
  });
  useEffect(() => {
    set(true);
  }, []);
  return (
    <Container>
      <Helmet title="Contact" />

      <Text>Prints are available.</Text>
      <Text>Please contact for more information.</Text>

      <IconContainer>
        {trail.map(({ opacity, transform }, index) => {
          const iconName = icons[index];
          const icon = iconConfig.get(iconName);
          return (
            <Row key={iconName}>
              <animated.div style={{ opacity, transform }}>{icon}</animated.div>
            </Row>
          );
        })}
      </IconContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Text = styled.p`
  display: flex;
  text-align: center;
  font-size: 1.3rem;
`;

const Row = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
