import React from 'react'

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
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '20%',
    border: '1px solid green'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '60%',
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
    width: '75%',
    height: '30px',
    borderRadius: '5px',
    border: 'none',
    padding: '0 13.5px',
    margin: '30px 50px',
    boxShadow: '0 1px 1px 1px rgba(21,21,21,40%)',
  },
  horNavBar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    listStyleType: 'none',
  },
  listItemActivated: {
    color: '#f6bd60',
    width: '70px',
    height: '20px',
    fontWeight: 'bold',
    paddingBottom: '1px',
    borderBottom: '3px solid #f6bd60',
  },
  profilePic: {
    marginTop: '30px',
    width: '70px',
    height: '80px',
    border: '1px solid purple',
  }
}

const Nest = () => {
  return (
    <div style={style.pageWrapper}>
      <div style={style.navBar}>
        <div style={style.profilePic}>Fotinha</div>
        <p>Nomezito</p>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
        <div>Hive</div>
      </div>
      <div style={style.content}>
        <input style={style.inputSearch} placeholder="O que você quer procurar na Hive?" />
        <ul style={style.horNavBar}>
            <li>AVISOS</li>
            <li style={style.listItemActivated}>STATUS</li>
            <li>AGENDA</li>
        </ul>
      </div>
      <div style={style.config}>Config</div>
    </div>
  )
}

export default Nest