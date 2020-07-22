import React, { useState, FC, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { validateLogin } from '../../helpers/Validators'
import './LoginStyle.scss'

const Login: FC<ILoginProps> = (state, setState) => {
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

  return (
    <div className="login">
      <img src={require("../../assets/img/logo.png")}/>
      <form className="form">
        <input type="email" placeholder="Email" onChange={event => getFormValid('email', event)} />
        {formValid.email && <span className="error">e-mail inválido</span>}

        <input type="password" onChange={event => validateLogin('password', event)} />
        {formValid.password && <span className="error">senha inválida</span>}
        
        <button
         onClick={() => setState({ isAuthenticated: true})}>Login</button>
      </form>
    </div>
  )
}

export default Login