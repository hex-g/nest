import React from 'react'
import { NONAME } from 'dns';

const style = {
  pageWrapper: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    border: '1px solid blue'
  },
  navBar: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '20%',
    border: '1px solid green'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '60%',
    padding: '30px 50px',
    border: '1px solid red'
  },
  config: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '20%',
    border: '1px solid orange'
  },
  inputSearch: {
    width: '70%',
    height: '25px',
    borderRadius: '10px',
    border: 'none',
  }
}

const Nest = () => {
  return (
    <div style={style.pageWrapper}>
      <div style={style.navBar}>NavBar</div>
      <div style={style.content}>
        <input style={style.inputSearch} placeholder="O que você quer procurar na Hive?"/>
      </div>
      <div style={style.config}>Config</div>
    </div>
  )
}

export default Nest