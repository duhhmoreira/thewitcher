import React, { useState, FC, ChangeEvent } from 'react'
import { validateLogin } from '../../helpers/Validators'
import './LoginStyle.scss'
import youtube from '../../services/youtube'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


const Login: FC<ILoginProps> = ({state, setState}) => {
  const [formValid, setFormValid] = useState({
    email: false,
    password: false
  })

  const getFormValid = (field: string, inputValue: ChangeEvent<HTMLInputElement>) => {
    if (field === 'email') {
      setFormValid({...formValid, email: validateLogin('email', inputValue) })
    } else {
      setFormValid({ ...formValid, password: validateLogin('password', inputValue) })
    }
  }

  async function changeLogin () {
   await youtube.then((response) =>{
      setState({...state, videos: response.data.items, isAuthenticated: true});
    });
  }

  return (
 
    <div className="login">
      <img src={require("../../assets/img/logo.png")}/>
      <form className="form">

      <TextField id="input-email" label="E-mail" onChange={event => getFormValid('email', event.target.value)}/>
      
        {/* <input type="email" required placeholder="Email" onChange={event => getFormValid('email', event)} />
        <input type="password" onChange={event => validateLogin('password', event)} /> */}
        <Button variant="outlined" color="primary">
        LOAD MORE
      </Button>
      </form>
      <button
         onClick={() => changeLogin()}>Login</button>
    </div>
  )
}

export default Login