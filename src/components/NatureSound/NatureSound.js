import React, { useState } from 'react';
import YouTube from 'react-youtube';

const NatureSound = ({ videoId, opts }) => {
  const [playVideo, setPlayVideo] = useState(false); // State to control video play/pause
  const [player, setPlayer] = useState(null); // Reference to YouTube player

  // Play video handler
  const onPlayVideo = () => {
    setPlayVideo(true);
  };

  // Pause video handler
  const onPauseVideo = () => {
    setPlayVideo(false);
    if (player) {
      player.pauseVideo(); // Pause the YouTube video using the player reference
    }
  };

  // Save reference to YouTube player
  const onReady = (event) => {
    setPlayer(event.target);
  };

  // YouTube options
  const defaultOpts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 0,
      controls: 0,
      showinfo: 0,
      rel: 0,
      loop: 1,
      playlist: videoId,
      volume: 20,
    },
  };

  const mergedOpts = { ...defaultOpts, ...opts };

  return (
    <div>
      {!playVideo ? (
        <button className="btn btn-primary" onClick={onPlayVideo}>
          Play Nature Sound
        </button>
      ) : (
        <button className="btn btn-danger" onClick={onPauseVideo}>
          Pause Nature Sound
        </button>
      )}
      {playVideo && <YouTube videoId={videoId} opts={mergedOpts} onReady={onReady} />}
    </div>
  );
};

export default NatureSound;
