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
  Content
} from './Nest.style'

const EXAMPLE_HORIZONTAL_NAVBAR = ['AVISOS']

const EXAMPLE_CARD_POSTS = [
  {
    user: 'Germano',
    profilePic: 'https://media.licdn.com/dms/image/C4D03AQHv3UDt2OH7uw/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=qcsJy1xt4V8brdPvHXDU6WcBSnEr2mkH-FpmcFZRonU',
    description: 'Construir uma API REST não é tão difícil quanto parece. Neste tutorial vamos precisar das ferramentas listadas abaixo...',
    date: '20 Jan 2019',
  },
  {
    user: 'Germano',
    profilePic: 'https://media.licdn.com/dms/image/C4D03AQHv3UDt2OH7uw/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=qcsJy1xt4V8brdPvHXDU6WcBSnEr2mkH-FpmcFZRonU',
    description: 'Aprenda a trabalhar com uma das ferramentas mais utilizadas no mercado de Java...',
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
          <SearchBox />
          <HorizontalNavigation>
            <HorizontalNavbar options={options} />
          </HorizontalNavigation>
        </Form>
        <Content>
          {posts.map((post, index) => (
            <HomeCard
            key={`${post.user}-${index}`}
            userPicture={post.profilePic}
            username={post.user}
            description={post.description}
            postDate={post.date}
            />
          ))}
        </Content>
      </Container>
    </Page>
  )
}

export default Nest