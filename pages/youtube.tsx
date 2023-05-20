import React from "react";
import YouTube from "react-youtube";

export default function Youtube () {
  
  const videoId = "Nr-gYadj5dw";
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        start: 0,
      },
    };

    return (
      <div>
        <h3>GeeksforGeeks - Youtube</h3>

             <YouTube videoId={videoId} opts={opts} />

      </div>
    );
  }

