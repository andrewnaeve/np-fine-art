import { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

export function useAnimation({ opacity = true } = {}) {
  const [loaded, setLoaded] = useState(false);
  function handleLoad() {
    setLoaded(true);
  }
  const animationProps = useSpring({
    ...(opacity && { opacity: loaded ? 1 : 0 }),
    transform: `translate3d(0, ${loaded ? 0 : 10}px, 0)`
  });

  return {
    handleLoad,
    animationProps
  };
}

export const AnimatedDiv = styled(animated.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
