import React, { useState, FC, ChangeEvent } from 'react'
import { validateEmail, validatePassword } from '../../helpers/Validators'
import './LoginStyle.scss'
import youtube from '../../services/youtube'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


const Login: FC<ILoginProps> = ({state, setState}) => {
  const InputEmail = "email";
  const InputPassword = "passwrod";

  const [formValid, setFormValid] = useState({
    email: true,
    password: true,
    formValidate: false
  })
  
  async function changeLogin () {
   await youtube().then((response) =>{
      setState({...state, videos: response.data.items, isAuthenticated: true, pageToken: response.data.nextPageToken});
    });
  }

  const validateForm = (field: string, inputValue: string) : void => {
    field === InputEmail
    ? setFormValid({...formValid, email : validateEmail(field, inputValue)})
    : setFormValid({...formValid, password : validatePassword(field, inputValue)});

    if(formValid.email && formValid.password){
      setFormValid({...formValid, formValidate : true});
    }
  }

  return (
 
    <div className="login">
      <img src={require("../../assets/img/logo.png")}className="logoLogin"/>
      <form className="form">

      <TextField
       InputProps={{
        className: "input"
       }}
       id="email-input" 
       label="E-mail" 
       onChange={event => validateForm(InputEmail, event.target.value)}/>
       {!formValid.email && <label>E-mail Invalido</label>}
      <TextField
          InputProps={{
            className: "input"
          }}
          id="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={event => validateForm(InputPassword, event.target.value)}
        />
         {!formValid.password && <label>Senha Invalida</label>}
        <Button 
        disabled={!formValid.formValidate}
        variant="outlined" 
        color="primary" 
        onClick={() => changeLogin()}>
        Login
      </Button>
      </form>
    </div>
  )
}

export default Login