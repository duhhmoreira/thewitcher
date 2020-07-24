import React, { FC } from 'react';

const VideoDisplay: FC<IVideoDisplay> = ({ state, setState }) => {
  console.log(state.selectedVideo.snippet.resourceId.videoId)
  const videoSrc = `https://www.youtube.com/embed/${state.selectedVideo.snippet.resourceId.videoId}`;
  console.log(typeof (state));
  return (

    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "30.25%",
        paddingTop: -10,
        height: 0
      }}
    >
      <iframe
        title="Video Display"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={videoSrc}
        frameBorder="0"
      />
    </div>


  )
}

export default VideoDisplay;