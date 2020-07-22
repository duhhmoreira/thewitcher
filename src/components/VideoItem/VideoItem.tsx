
import React, { FC, Dispatch, SetStateAction } from 'react';
import "VideoItemStyle.scss"

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const VideoItem: FC<IVideoItem> = (video, handleVideoSelect) => {
    const bull = <span className="bullet">•</span>;
  
  return (
<div onClick={ () => handleVideoSelect(video)} 
className="videoItem">

  <img className="ui image" src={video.snippet.thumbnails.medium.url}
  alt={video.snippet.description}/>
  <div className="content">
  <div className="header">{video.snippet.title}</div>
  </div>
</div>
  )
}

export default VideoItem;
