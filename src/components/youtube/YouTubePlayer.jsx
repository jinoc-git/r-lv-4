import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ linkUrl }) => {
  const id = linkUrl.split('=')[1];

  const opts = {
    width: '100%',
    height: '360',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <YouTube
      videoId={id}
      opts={opts}
      onEnd={(e) => {
        e.target.stopVideo(0);
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default YouTubePlayer;
