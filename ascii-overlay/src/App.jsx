import { useEffect, useState } from "react";
import "./App.css";
import Video2Ascii from "video2ascii";

function App() {
  const [isPlaying] = useState(true);
  const videoSrc = `${import.meta.env.BASE_URL}video.mp4`;
  const playbackRate = 0.5;

  useEffect(() => {
    let frameId = 0;

    const applyPlaybackRate = () => {
      const video = document.querySelector(".video-full video");
      if (video) {
        video.playbackRate = playbackRate;
        return;
      }
      frameId = requestAnimationFrame(applyPlaybackRate);
    };

    applyPlaybackRate();

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [playbackRate]);

  return (
    <div className="app">
      <div className="stage">
        <div className="stage-inner">
          <Video2Ascii
            src={videoSrc}
            numColumns={190}
            colored={true}
            brightness={1.25}
            blend={0}
            highlight={40}
            audioEffect={0}
            enableMouse={false}
            enableRipple={false}
            charset="detailed"
            isPlaying={isPlaying}
            autoPlay={true}
            className="video-full"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
