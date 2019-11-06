import React, { useState } from 'react'
import Layout from './components/Layout'
import Template from './Template'
import Login from './pages/Login'
import Routes from './routes'

const App = () => {
  const [colorTheme, setColorTheme] = useState(localStorage.getItem('favoriteTheme'))
  const token = localStorage.getItem('access_token')

  return (
    <Layout color={colorTheme === null ? 'dark' : colorTheme}>
      {token
        ? <Template handleThemeChange={setColorTheme}><Routes /></Template>
        : <Login />}

    </Layout>
  )
}

export default App
