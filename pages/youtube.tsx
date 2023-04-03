import React from "react";
import YouTube from "react-youtube";

export default class Youtube extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        start: 300,
      },
    };

    return (
      <div>
        <h3>GeeksforGeeks - Youtube</h3>

        <iframe
          className="video"
          title="Youtube player"
        //   sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/Nr-gYadj5dw?autoplay=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen

        ></iframe>
      </div>
    );
  }
}
