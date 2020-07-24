import React, { FC } from 'react';
import "./VideoItemStyle.scss";
const VideoItem: FC<IVideoItem> = ({ video, handleVideoSelect }) => {

  return (
    <div onClick={() => handleVideoSelect(video)}
      className="videoItem" style={{ backgroundImage: `url(${video.snippet.thumbnails.maxres.url})` }}>
      <div className="header">{video.snippet.title}</div>
    </div>
  )
}

export default VideoItem;
