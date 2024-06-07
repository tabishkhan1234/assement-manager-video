
import React, { useState } from 'react';
import VideoUploader from './components/VideoUploader';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import "./App.css"

const App = () => {
  const [videos, setVideos] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [showBookmarked, setShowBookmarked] = useState(false);

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  const playVideo = (video) => {
    setCurrentVideo(video);
  };

  const closeVideo = () => {
    setCurrentVideo(null);
  };

  const bookmarkVideo = (video) => {
    if (!bookmarked.includes(video)) {
      setBookmarked([...bookmarked, video]);
    }
  };

  return (
    <div>
      <h1>Video Manager</h1>
      <VideoUploader onAddVideo={addVideo} />
      <button onClick={() => setShowBookmarked(!showBookmarked)}>
        {showBookmarked ? 'Show All Videos' : 'Show Bookmarked Videos'}
      </button>
      <VideoList
        videos={showBookmarked ? bookmarked : videos}
        onPlayVideo={playVideo}
        onBookmarkVideo={bookmarkVideo}
        showBookmarked={showBookmarked}
      />
      {currentVideo && <VideoPlayer video={currentVideo} onClose={closeVideo} />}
    </div>
  );
};

export default App;
// https://github.com/tabishkhan1234/video-manger.git