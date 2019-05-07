import React from 'react'
import Navbar from '../../components/Navbar'
import HorizontalNavbar from '../../components/HorizontalNavbar'
import HomeCard from '../../components/HomeCard'
import SearchBox from '../../components/SearchBox'
import {
  Page,
  Container,
  Content,
} from './Nest.style'

const style = {
  config: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '20%',
  },
}

const Nest = () => {
  return (
    <Page>
      <Navbar /*username='' pages=[{text, image}]*/ />
      <Container>
        <SearchBox />
        <HorizontalNavbar /*items=['']*/ />
        <Content>
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </Content>
      </Container>
      <div style={style.config}>Config</div>
    </Page>
  )
}

export default Nest