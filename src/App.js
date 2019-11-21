import React, { useReducer } from 'react'
import Layout from './components/Layout'
import Template from './Template'
import Login from './pages/Login'
import Routes from './routes'

import themeColorReducer from './utils/reducers/themeColorReducer'
import themeContext from './utils/Contexts/themeContext'

const storedTheme = localStorage.getItem('favoriteTheme')
const currentTheme = storedTheme === null ? 'dark' : storedTheme

const App = () => {
  const token = localStorage.getItem('access_token')
  const [state, dispatchTheme] = useReducer(themeColorReducer, { colorTheme: currentTheme })

  return (
    <themeContext.Provider value={{ state, dispatchTheme }}>
      <Layout color={state.colorTheme}>
        {token
          ? <Template><Routes /></Template>
          : <Login />}

      </Layout>
    </themeContext.Provider>
  )
}

export default App
