import React from 'react'

const style = {
  page: {
    display: 'flex',
    width: '100%',
    height: '100vh',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '60%',
  },
  config: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '20%',
  },
  searchbox: {
    width: '500px',
    height: '35px',
    borderRadius: '8px',
    border: 'none',
    font: '16px',
    padding: '0 13.5px',
    margin: '30px 50px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  horizontalNavbar: {
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

  navbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '20%',
    border: '1px solid red',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userpic: {
    marginTop: '30px',
    backgroundImage: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    backgroundSize: 'cover',
    width: '70px',
    height: '80px',
  },
  username: {
    fontSize: '20px',
    marginTop: '15px',
    fontWeight: 'bold',
  },

  navigation: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '44px',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '24px 0',
    fontSize: '16px',
  },
  navItemImage: {
    backgroundColor: 'orange',
    width: '30px',
    height: '30px',
    marginRight: '16px'
  },

  logo: {
    marginBottom: '21px',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 45px',
  },

  card: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: '110px',
    padding: '16px 16px',
    marginTop: '16px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(21,21,21,0.2)'
  },
  cardImage: {
    width: '70px',
    height: '80px',
    backgroundColor: 'orange'
  },

  cardContent: {
    fontSize: '18px',
  },
  cardUsername: {
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  cardText: {
  },
  cardDate: {
    fontSize: '12px',
  }
}

const Nest = () => {
  return (
    <div style={style.page}>
      <div style={style.navbar}>
        <div>
          <div style={style.profile}>
            <div style={style.userpic} />
            <p style={style.username}>Nomezito</p>
          </div>
          <div style={style.navigation}>
            <ul style={style.navigationItems}>
              <li style={style.navItem}>
                <div style={style.navItemImage} />
                <a>Pagina</a>
              </li>
              <li style={style.navItem}>
                <div style={style.navItemImage} />
                <a>Pagina</a>
              </li>
              <li style={style.navItem}>
                <div style={style.navItemImage} />
                <a>Pagina</a>
              </li>
              <li style={style.navItem}>
                <div style={style.navItemImage} />
                <a>Pagina</a>
              </li>
              <li style={style.navItem}>
                <div style={style.navItemImage} />
                <a>Pagina</a>
              </li>
            </ul>
          </div>
        </div>
        <div style={style.logo}>Hive</div>
      </div>
      <div style={style.container}>
        <input style={style.searchbox} placeholder="O que você quer procurar na Hive?" />
        <ul style={style.horizontalNavbar}>
          <li style={style.horizontalNavItem}>AVISOS</li>
          <li style={style.listItemActivated}>STATUS</li>
          <li style={style.horizontalNavItem}>AGENDA</li>
        </ul>
        <div style={style.content}>
          <div style={style.card}>
            <div style={style.cardImage} />
            <div style={style.cardContent}>
              <p style={style.cardUsername}>Gabriel Leme</p>
              <p style={style.cardText}>compartilhou a anotação "<span style={{ fontWeight: 'bold' }}>REST API com Node.js</span>" na HiveShare</p>
            </div>
            <p style={style.cardDate}>Dom 14 Abril</p>
          </div>
          <div style={style.card}>
            <div style={style.cardImage} />
            <div style={style.cardContent}>
              <p style={style.cardUsername}>Gabriel Leme</p>
              <p style={style.cardText}>compartilhou a anotação "<span style={{ fontWeight: 'bold' }}>REST API com Node.js</span>" na HiveShare</p>
            </div>
            <p style={style.cardDate}>Dom 14 Abril</p>
          </div>
          <div style={style.card}>
            <div style={style.cardImage} />
            <div style={style.cardContent}>
              <p style={style.cardUsername}>Gabriel Leme</p>
              <p style={style.cardText}>compartilhou a anotação "<span style={{ fontWeight: 'bold' }}>REST API com Node.js</span>" na HiveShare</p>
            </div>
            <p style={style.cardDate}>Dom 14 Abril</p>
          </div>
        </div>
      </div>
      <div style={style.config}>Config</div>
    </div>
  )
}

export default Nest