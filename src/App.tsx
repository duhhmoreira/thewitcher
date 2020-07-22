import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Loading from './components/Loading/Loading'

const initialState: IAppState = {
  offsetList: 0,
  isAuthenticated: true,
  isLoading: true,
  userEmail: '',
  selectedVideo : '',
  videos : [],
}
const App = () => {
  const [state, setState] = useState(initialState)
    setTimeout(()=>{
      setState({isLoading: false})
    }, 1000)
  return (
    <>
      {console.log('state => ', state)}
      {state.isLoading && <Loading/>}
      {/* {state.isAuthenticated ? */}
       <Home mainState={{ state, setState }} /> 
      {/* : <Login mainState={{ state, setState }} />} */}
    </>
  )
}

export default App;
