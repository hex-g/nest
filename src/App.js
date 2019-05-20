import React from 'react'
import Layout from './components/Layout'
import Template from './Template'
import Routes from './routes'

const App = () => {
  return (
    <Layout>
      <Template>
        <Routes />
      </Template>
    </Layout>
  )
}

export default App