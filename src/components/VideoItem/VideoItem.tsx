
import React, { FC } from 'react';
import "./VideoItemStyle.scss";

const VideoItem: FC<IVideoItem> = ({video, handleVideoSelect}) => {
    
  return (
    <div onClick={ () => handleVideoSelect(video)} 
      className="videoItem">
      <img className="imagemSnippet" src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}/>
      <div >
      <div className="header">{video.snippet.title}</div> 
       </div>
    </div>
  )
}

export default VideoItem;
