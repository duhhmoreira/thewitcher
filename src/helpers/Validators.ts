import {ChangeEvent} from 'react'

export const validateEmail = ( field: string, inputValue: string ) : boolean =>{
  const expression = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  return expression.test(String(inputValue).toLowerCase())
}

export const validatePassword = ( field: string, inputValue: string ) : boolean =>{
  return true;
}