
import React, { FC, useState } from 'react';
import "./VideoListStyle.scss";
import VideoItem from '../VideoItem/VideoItem';
import { Button, CircularProgress } from '@material-ui/core';
import youtube from '../../services/youtube';


const VideoList: FC<IVideoList> = ({state, handleVideoSelect, setState}) => {
  const [listVideos, setListVideos] = useState({
    blockButton: false,
    isLoading: false
  })
  async function moreVideos () {
    await youtube(state.pageToken).then((response) =>{
      setListVideos({...listVideos, isLoading: true})
     
      let concatVideos = state.videos;
      response.data.items.map((item:any) => {
        concatVideos.push(item);
      })
      if(response.data.nextPageToken){
        setListVideos({...listVideos, isLoading: false})
        setState({...state, videos: concatVideos, pageToken: response.data.nextPageToken});
      } else {
        setListVideos({...listVideos, isLoading: false})
        setListVideos({...listVideos, blockButton: true})
      }
     });
   }
   
  return (
    <div className="listVideos">
      { console.log(listVideos.isLoading)}
    <div className="listVideos">{state.videos.map( (item :any) =>{
        return <VideoItem key={item.id.videoId} video={item}
        handleVideoSelect={handleVideoSelect}/>
    })}</div>
    {listVideos.isLoading ? 
    <CircularProgress color="secondary" />
    :<Button 
    className="buttonMore"
    variant="outlined" 
    color="primary"
    disabled={listVideos.blockButton}
    onClick={()=> moreVideos()}>
       LOAD MORE
     </Button>}
   
    </div>
  )
}

export default VideoList;
