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

const EXAMPLE_USERNAME = '[USERNAME]'
const EXAMPLE_PAGES = [
  {
    title: '[PAGINA]',
    image: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    link: 'profile'
  },
  {
    title: '[PAGENA]',
    image: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    link: 'profile'
  },
  {
    title: '[PAGINAH]',
    image: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    link: 'profile'
  }
]

const EXAMPLE_HORIZONTAL_NAVBAR = ['Avisos', 'Status']

const EXAMPLE_CARD_POSTS = [
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
]


const Nest = ({
  username = EXAMPLE_USERNAME,
  pages = EXAMPLE_PAGES,
  posts = EXAMPLE_CARD_POSTS,
  options = EXAMPLE_HORIZONTAL_NAVBAR
}) => {

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
          <Navbar isOpen={navigationBar} handleNavigationBar={handleNavigationBar} username={username} pages={pages} />
        </Navigation>
        <Container>
          <Form>
            <Search>
              <SearchBox />
            </Search>
            <HorizontalNavigation>
              <HorizontalNavbar options={options} />
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