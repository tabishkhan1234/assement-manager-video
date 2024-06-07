
import React from 'react';

const VideoPlayer = ({ video, onClose }) => {
  return (
    <div className="popup">
      <video controls src={video}></video>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default VideoPlayer;
