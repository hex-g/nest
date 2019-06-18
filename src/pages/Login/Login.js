import React, { useState } from 'react'
import Layout from '../../components/Layout'
import LoginSection from '../../components/LoginSection'
import { getAccessToken } from './Login.service'
import Message from '../../components/Message'
import {ACCESS_TOKEN} from '../../config/constants'



const Login = () => {
  
  const [behavior, setBehavior] = useState({
    show: false,
    type: 'idling',
    message: ''
  }) 

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleGetUserTokenClick = async () => {
    if(!username || !password){
      setBehavior(
        {
          show: true,
          type: 'error',
          message: 'Ops... Parece que você não preencheu todos os campos'
        }
      )
      return
    }
    setBehavior(
      {
        show: true,
        type: 'loading',
        message: 'Só um minutinho, estamos processando...'
      }
    )
    try{
      const response = await getAccessToken(username, password)
      
      response && response.headers && response.headers.authorization && localStorage.setItem(ACCESS_TOKEN, response.headers.authorization)
      setBehavior(
        {
          show: false,
          type: 'idling',
          message: 'Tudo certo!!!'
        }
      )
      window.location.reload()
    }
    catch(e){
      setBehavior(
        {
          show: true,
          type: 'error',
          message: 'Eita... algo deu errado. Você tem certeza que digitou tudo certinho?'
        }
      )
    }
  }

  return (
    <Layout>
      <Message behavior={behavior}/>
      <LoginSection onUsernameChange = {setUsername} onPasswordChange = {setPassword} lockFields = {behavior.type} onButtonClick = {handleGetUserTokenClick}/>
    </Layout>
  )
}

export default Login