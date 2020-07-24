
import React, { FC } from 'react';
import "./VideoItemStyle.scss";
const VideoItem: FC<IVideoItem> = ({video, handleVideoSelect}) => {
    
  return (
    <div onClick={ () => handleVideoSelect(video)} 
      className="videoItem" style={{backgroundImage: `url(${video.snippet.thumbnails.maxres.url})`}}>
      {/* <img className="imagemSnippet" src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}/> */}
      <div className="header">{video.snippet.title}</div> 
    </div>
  )
}

export default VideoItem;
