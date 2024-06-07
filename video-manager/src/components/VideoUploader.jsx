
import React, { useState } from 'react';

const VideoUploader = ({ onAddVideo }) => {
  const [video, setVideo] = useState(null);

  const handleFileChange = (e) => {
    setVideo(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (video) {
      onAddVideo(video);
      setVideo(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button type="submit">Add Video</button>
    </form>
  );
};

export default VideoUploader;
