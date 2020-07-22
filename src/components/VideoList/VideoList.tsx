
import React, { FC, Dispatch, SetStateAction } from 'react';
import "VideoListStyle.scss"
import VideoItem from '../VideoItem/VideoItem';


const VideoList: FC<IVideoList> = (videos, handleVideoSelect) => {
    const videosRender = videos.map((video) =>{
        return <VideoItem key={video.id.videoId} video={video}
        handleVideoSelect={handleVideoSelect}/>

    });
  return (
    <div className="ui relaxed divided list">{videosRender}</div>
  )
}

export default VideoList;
