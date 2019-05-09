import React from 'react'
import Navbar from '../../components/Navbar'
import HorizontalNavbar from '../../components/HorizontalNavbar'
import HomeCard from '../../components/HomeCard'
import SearchBox from '../../components/SearchBox'
import ConfigBar from '../../components/ConfigBar'
import {
  Page,
  Navigation,
  NavigationAndContent,
  Container,
  Form,
  Search,
  HorizontalNavigation,
  Content,
  Configuration,
} from './Nest.style'

const POSTS = [
  {
    user: 'Caio',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet',
    date: '20 Jan 2019',
  },
  {
    user: 'Hirumitsu',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet',
    date: '20 Jan 1999',
  },
  {
    user: 'Hirumitsu',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet',
    date: '20 Jan 1999',
  },
  {
    user: 'Hirumitsu',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet',
    date: '20 Jan 1999',
  },
  {
    user: 'Hirumitsu',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet',
    date: '20 Jan 1999',
  },
  {
    user: 'Hirumitsu',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet',
    date: '20 Jan 1999',
  },
  {
    user: 'Hirumitsu',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet',
    date: '20 Jan 1999',
  },
  {
    user: 'Hirumitsu',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet',
    date: '20 Jan 1999',
  },
  {
    user: 'Hirumitsu',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet',
    date: '20 Jan 1999',
  },
  {
    user: 'Hirumitsu',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet',
    date: '20 Jan 1999',
  },
  {
    user: 'Hirumitsu',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet',
    date: '20 Jan 1999',
  },
  {
    user: 'Hirumitsu',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet',
    date: '20 Jan 1999',
  },
  {
    user: 'Hirumitsu',
    profilePic: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem dolor sit amet',
    date: '20 Jan 1999',
  },
]


const Nest = ({ posts = POSTS }) => {

  const [navigationBar, setNavigationBar] = React.useState(false)
  const [configurationBar, setConfigurationBar] = React.useState(false)

  const handleNavigationBar = () => {
    setNavigationBar(!navigationBar)
  }

  const handleConfigurationBar = () => {
    setConfigurationBar(!configurationBar)
  }

  return (
    <Page>
      <NavigationAndContent>
        <Navigation isOpen={navigationBar}>
          <Navbar isOpen={navigationBar} handleNavigationBar={handleNavigationBar} /*username='' pages=[{text, image}]*/ />
        </Navigation>
        <Container>
          <Form>
            <Search>
              <SearchBox />
            </Search>
            <HorizontalNavigation>
              <HorizontalNavbar /*items=['']*/ />
            </HorizontalNavigation>
          </Form>
          <Content>
            {posts.map(post => (
              <HomeCard userPicture={post.profilePic} username={post.user} description={post.description} postDate={post.date} />
            ))}
          </Content>
        </Container>
      </NavigationAndContent>
      <Configuration isOpen={configurationBar} >
        <ConfigBar isOpen={configurationBar} handleConfigurationBar={handleConfigurationBar} />
      </Configuration>
    </Page>
  )
}

export default Nest