import React, { useState } from 'react'
import Layout from '../../components/Layout'
import LoginSection from '../../components/LoginSection'
import { getAccessToken } from './Login.service'
import Alert, { showAlert } from '../../components/Alert'
import { ACCESS_TOKEN } from '../../config/constants'

const Login = () => {
  const [lock, setLock] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleGetUserTokenClick = async () => {
    if (!username || !password) {
      showAlert('Ops... Parece que você não preencheu todos os campos', 'error')
      setLock(false)
      return
    }

    showAlert('Só um minutinho, estamos processando...', 'idling', false)
    setLock(true)

    try {
      const response = await getAccessToken(username, password)
      response
        && response.headers
          && response.headers.authorization
            && localStorage.setItem(ACCESS_TOKEN, response.headers.authorization)
      showAlert('Tudo certo!!!', 'idling')
      window.location.reload()
    } catch (e) {
      showAlert('Eita... algo deu errado. Você tem certeza que digitou tudo certinho?', 'error')
      setLock(false)
    }
  }

  return (
    <Layout>
      <Alert />
      <LoginSection
        onUsernameChange={setUsername}
        onPasswordChange={setPassword}
        lockFields={lock}
        onButtonClick={handleGetUserTokenClick}
      />
    </Layout>
  )
}

export default Login
