import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Loading from './components/Loading/Loading'

const initialState: IAppState = {
  offsetList: 0,
  isAuthenticated: false,
  isLoading: true,
  userEmail: '',
  selectedVideo : '',
  videos : [],
}
const App = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setTimeout(()=>{
      setState({...state, isLoading: false})
    }, 1000)
  }, [])

  return (
    <>
      {state.isLoading && <Loading/>}
      {state.isAuthenticated 
      ? <Home state={state} setState={setState} /> 
      : <Login state={state} setState={setState} />}  
    </>
  )
}

export default App;
