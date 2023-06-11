import { useEffect } from 'react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export const VideoPlayer = () => {
  useEffect(() => {
    // This code loads the IFrame Player API code asynchronously.
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag && firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    let player :any;

    if(typeof window !== 'undefined') {
      window.onYouTubeIframeAPIReady = () => {
        player = new window.YT.Player('player', {
          host: 'https://www.youtube.com',
          videoId: 'dlFA0Zq1k2A',
          playerVars: {
            enablejsapi: 1,
            playsinline: 1,
            start: 0,
            disablekb: 0
          },
          events: {
            onStateChange: onPlayerStateChange
          }
        });
      };
    }

    const onPlayerStateChange = (event:any) => {
      console.log('player state: ' + player.getPlayerState());
    };

  

    const stopVideo = () => {
      player.stopVideo();
    };

    return () => {
      // Clean up event listeners or other resources if needed
    };
  }, []);

  return (
    <div>
      <div id="player-size">
      <div id="cropping-div">
        <div id="div-to-crop">
          <div id="player-wrapper">
            <div id="player"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};