import React, { Component } from 'react';
import styled from 'styled-components';
import { Spring, config } from 'react-spring';

class AnimatedContainer extends Component {
  state = {
    loaded: false
  };

  _handleLoad = this._handleLoad.bind(this);

  render() {
    return this.props.children({
      handleLoad: this._handleLoad,
      renderAnimation: this._renderAnimation,
      animatePosition: this._animatePosition
    });
  }

  _renderAnimation = component => {
    const { loaded } = this.state;
    const dynamicStyle = {
      opacity: loaded ? 1.0 : 0.0,
      position: loaded ? -10 : 0
    };
    const animationConfig = key => {
      return key === 'opacity' ? { easing: config.default } : { easing: config.wobbly };
    };

    return (
      <Spring to={dynamicStyle} config={animationConfig}>
        {({ position, opacity }) => (
          <AnimatedDiv
            style={{
              transform: `translate3d(0, ${position}px, 0)`,
              WebkitTransform: `translate3d(0, ${position}px, 0)`,
              opacity: `${opacity}`
            }}
          >
            {component}
          </AnimatedDiv>
        )}
      </Spring>
    );
  };

  _animatePosition = component => {
    const { loaded } = this.state;
    const dynamicStyle = {
      position: loaded ? -10 : 0
    };
    return (
      <Spring to={dynamicStyle} config={{ easing: config.gentle }}>
        {({ position }) => (
          <AnimatedDiv
            style={{
              transform: `translate3d(0, ${position}px, 0)`,
              WebkitTransform: `translate3d(0, ${position}px, 0)`
            }}
          >
            {component}
          </AnimatedDiv>
        )}
      </Spring>
    );
  };

  _handleLoad() {
    this.setState({
      loaded: true
    });
  }
}

export default AnimatedContainer;

const AnimatedDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
