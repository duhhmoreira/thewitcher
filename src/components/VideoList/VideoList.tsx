
import React, { FC, Dispatch, SetStateAction } from 'react';
import "./VideoListStyle.scss";
import VideoItem from '../VideoItem/VideoItem';
import { Button } from '@material-ui/core';


const VideoList: FC<IVideoList> = ({state, handleVideoSelect}) => {
  
  return (
    <div>
    <div className="listVid">{state.videos.map( (item :any) =>{
        return <VideoItem key={item.id.videoId} video={item}
        handleVideoSelect={handleVideoSelect}/>
    })}</div>
   <Button variant="outlined" color="primary">
      LOAD MORE
    </Button>
    </div>
  )
}

export default VideoList;
