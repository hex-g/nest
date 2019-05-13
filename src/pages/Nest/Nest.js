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
    image: 'url("data:image/jpeg;base64,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")',
    link: 'profile'
  },
  {
    title: '[PAGINAH]',
    image: 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")',
    link: 'profile'
  }
]

const EXAMPLE_HORIZONTAL_NAVBAR = ['A', 'B', 'C']

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