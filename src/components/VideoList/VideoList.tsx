
import React, { FC, useState } from 'react';
import "./VideoListStyle.scss";
import VideoItem from '../VideoItem/VideoItem';
import { Button, CircularProgress } from '@material-ui/core';
import youtube from '../../services/youtube';


const VideoList: FC<IVideoList> = ({ state, handleVideoSelect, setState }) => {
  const [listVideos, setListVideos] = useState({
    blockButton: false,
    isLoading: false
  })
  async function moreVideos() {
    setListVideos({ ...listVideos, isLoading: true })
    await youtube(state.pageToken).then((response) => {
      let concatVideos = state.videos;
      response.data.items.map((item: any) => {
        concatVideos.push(item);
      })
      if (response.data.nextPageToken) {
        setListVideos({ ...listVideos, isLoading: false })
        setState({ ...state, videos: concatVideos, pageToken: response.data.nextPageToken });
      } else {
        setListVideos({ ...listVideos, isLoading: false, blockButton: true })
        setState({ ...state, pageToken: null })
      }
    });
  }

  return (
    <div className="listVideos">
      <div className="listVideos">{state.videos.map((item: any) => {
        return <VideoItem key={item.id.videoId} video={item}
          handleVideoSelect={handleVideoSelect} />
      })}
        {state.pageToken ? (
          <div className="divButtonMore">
            {listVideos.isLoading
              ? <CircularProgress color="secondary" />
              : <Button
                className="buttonMore"
                variant="outlined"
                color="primary"
                disabled={listVideos.blockButton}
                onClick={() => moreVideos()}>
                LOAD MORE
        </Button>}
          </div>
        ) : (
            <div className="divButtonMore">
              <Button
                className="buttonMore"
                variant="outlined"
                color="primary"
                disabled={true}
                onClick={() => moreVideos()}>
                NO MORE VIDEOS
        </Button>
            </div>)}
      </div>
    </div>
  )
}

export default VideoList;
