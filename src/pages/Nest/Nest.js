import React from 'react'
import HorizontalNavbar from '../../components/HorizontalNavbar'
import HomeCard from '../../components/HomeCard'
import SearchBox from '../../components/SearchBox'
import {
  Page,
  Container,
  Form,
  Search,
  HorizontalNavigation,
  Content,
  Configuration,
} from './Nest.style'

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
  posts = EXAMPLE_CARD_POSTS,
  options = EXAMPLE_HORIZONTAL_NAVBAR
}) => {

  return (
    <Page>
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
    </Page>
  )
}

export default Nest