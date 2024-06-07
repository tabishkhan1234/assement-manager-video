
import React from 'react';

const VideoList = ({ videos, onPlayVideo, onBookmarkVideo, showBookmarked }) => {
  return (
    <div>
      <h2>{showBookmarked ? 'Bookmarked Videos' : 'All Videos'}</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <button onClick={() => onPlayVideo(video)}>Play</button>
            <button onClick={() => onBookmarkVideo(video)}>Bookmark</button>
            <span>{video}</span>
          </li>
        ))}
      </ul>
      
    </div>
  );
  
};


export default VideoList;
