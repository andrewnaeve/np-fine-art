import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

export default ({ handleLoad }) => {
  const opts = {
    width: '560',
    height: '315'
  };
  return (
    <OuterWrapper>
      <MediaWrapper>
        <YouTube videoId="B5nF1Mmte0M" opts={opts} className="iframeStyle" onReady={handleLoad} />
      </MediaWrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const MediaWrapper = styled.div`
  position: relative;
  ::after {
    content: '';
    display: block;
    padding-bottom: 56.25%;
    height: 0;
  }
`;
