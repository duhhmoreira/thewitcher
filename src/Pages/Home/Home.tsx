import React, { FC, Dispatch, SetStateAction } from 'react'
import VideoList from "../../components/VideoList/VideoList";
import "./HomeStyle.scss";

const Home: FC<IHomeProps> = (state, setState) => {

  const handleVideoSelect = (video) =>{
    setState({selectedVideo: video});
  }
  
  return (
    <div>
      <h1>Home Component</h1>
      <aside>
        <button>trailers</button>
        <button>Logout</button>
      </aside>
      {/* <VideoList mainState={{ state, setState }}/> */}
      <div className="videoList">
        <VideoList mainState={{state, handleVideoSelect }}/> 
      </div>
    </div>
  ) 
}

export default Home
