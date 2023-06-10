import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';

const CustomVideoPlayer = ({ videoUrl }:any) => {
  const [isPlaying, setPlaying] = useState(false);
  const [isMuted, setMuted] = useState(false);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    setMuted(!isMuted);
  };

  const handleReady = (event:any) => {
    playerRef.current = event.target;
  };

  return (
    <div className="relative">
      <div className="aspect-w-16 aspect-h-9">
        <YouTube
          videoId="https://youtu.be/9VNI3s7rUoQ?list=RDAVM4J0qvdKw&t=156"
          className="absolute top-0 left-0 w-full h-full"
          onReady={handleReady}
          onStateChange={(event) => setPlaying(event.data === 1)}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        {isPlaying ? (
          <span
            className="material-icons text-white opacity-60 hover:opacity-100 cursor-pointer"
            onClick={handlePlayPause}
          >
            pause
          </span>
        ) : (
          <span
            className="material-icons text-white opacity-60 hover:opacity-100 cursor-pointer"
            onClick={handlePlayPause}
          >
            play_arrow
          </span>
        )}
      </div>
      <div className="absolute bottom-4 left-4 flex items-center">
        {isMuted ? (
          <span
            className="material-icons text-white opacity-60 hover:opacity-100 cursor-pointer"
            onClick={handleMuteUnmute}
          >
            volume_off
          </span>
        ) : (
          <span
            className="material-icons text-white opacity-60 hover:opacity-100 cursor-pointer"
            onClick={handleMuteUnmute}
          >
            volume_up
          </span>
        )}
        <div className="ml-2 text-white opacity-80">Video Title</div>
      </div>
    </div>
  );
};

// Usage example
const App = () => {
  const VIDEO_URL = 'youtu.be/9VNI3s7rUoQ?list=RDAVM4J0qvdKw';

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900">
      <CustomVideoPlayer videoUrl={VIDEO_URL} />
    </div>
  );
};

export default App;
