import React from 'react';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  console.log('Video URL:', videoUrl); // Debug log

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={e => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>×</button>
        <video 
          controls 
          width="100%"
          onError={(e) => {
            console.error('Error loading video:', e);
            console.error('Video URL that failed:', videoUrl);
            console.error('Video element error code:', e.target.error?.code);
            console.error('Video element error message:', e.target.error?.message);
          }}
        >
          <source src={videoUrl} type="video/mp4; codecs=avc1.42E01E,mp4a.40.2" />
          <source src={videoUrl} type="video/webm" />
          <source src={videoUrl} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal; 