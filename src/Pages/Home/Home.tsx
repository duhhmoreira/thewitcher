import React, { FC, useEffect, useState } from 'react'
import VideoList from "../../components/VideoList/VideoList";
import "./HomeStyle.scss";
import youtube from '../../services/youtube'
import { AxiosResponse } from 'axios';
import VideoDisplay from '../../components/VideoDisplay/VideoDisplay';
import { Button } from '@material-ui/core';

const Home: FC<IHomeProps> = ({state, setState}) => {
  const handleVideoSelect = (video:string) =>{
    setState({...state, selectedVideo: video});
  }


//TODO - ajustar pagina para ficar com scroll na div dos videos
  useEffect(() => {
    setState({...state, isLoading: true})
    setTimeout(()=>{
      setState({...state, isLoading: false})
    }, 1000)
  }, [])

  return (
    <div className="content">
    
      <div className="menu">
      <img src={require("../../assets/img/logo.png")} className="logoMenu"/>
  
        <Button variant="outlined" color="primary" className="buttonTrailers">
          Trailers
        </Button>
        <Button color="primary"
          className="buttoLogout" onClick={()=> setState({isAuthenticated: false})}>Logout</Button>

      </div>
      {state.selectedVideo &&
        <div className="display">
          <Button color="primary"
          className="buttonClose" onClick={()=> setState({...state, selectedVideo: null})}>Close</Button>
          <VideoDisplay state={state} setState={setState}/>
        </div>}
      
      <div className="videoList">
      <img src={require("../../assets/img/logo.png")} className="logoListMobile"/>
        <VideoList state={state} handleVideoSelect= {handleVideoSelect}/> 
      </div>
    </div>
  ) 
}

export default Home
