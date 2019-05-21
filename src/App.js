import React from 'react'
import Layout from './components/Layout'
import Template from './Template'
import Routes from './routes'

const App = () => {

  const [colorTheme, setColorTheme] = React.useState(localStorage.getItem('favoriteTheme'))

  return (
    <Layout color={colorTheme}>
      <Template handleThemeChange={setColorTheme}>
        <Routes />
      </Template>
    </Layout>
  )
}

export default App