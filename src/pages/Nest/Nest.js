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

const EXAMPLE_HORIZONTAL_NAVBAR = ['STATUS', 'AVISOS']

const EXAMPLE_CARD_POSTS = [
  {
    user: 'Germano',
    profilePic: 'https://media.licdn.com/dms/image/C4D03AQHv3UDt2OH7uw/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=qcsJy1xt4V8brdPvHXDU6WcBSnEr2mkH-FpmcFZRonU',
    description: 'compartilhou a anotação "REST API com Node.Js" na HiveShare',
    date: '20 Jan 2019',
    tag: ['Backend', 'Frontend', 'Node'],
  },
  {
    user: 'Germano',
    profilePic: 'https://media.licdn.com/dms/image/C4D03AQHv3UDt2OH7uw/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=qcsJy1xt4V8brdPvHXDU6WcBSnEr2mkH-FpmcFZRonU',
    description: 'precisa de ajuda com "Como passar props para keyframes no styled-components utilizando React?" na HiveCentral',
    date: '20 Jan 1999',
    tag: ['Frontend', 'CSS'],
  },
]

const NEWS = [
  {
    user: 'Thiago Bonaceli',
    profilePic: 'https://media.licdn.com/dms/image/C4D03AQHv3UDt2OH7uw/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=qcsJy1xt4V8brdPvHXDU6WcBSnEr2mkH-FpmcFZRonU',
    description: 'PyLadies São Paulo',
    date: '20 Jan 2019',
    tag: [],
  },
  {
    user: 'Célia Taniwaki',
    profilePic: 'https://media.licdn.com/dms/image/C4D03AQHv3UDt2OH7uw/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=qcsJy1xt4V8brdPvHXDU6WcBSnEr2mkH-FpmcFZRonU',
    description: 'Avaliação continuada 03',
    date: '20 Jan 1999',
    tag: [],
  },
]


const Nest = ({
  posts = EXAMPLE_CARD_POSTS,
  options = EXAMPLE_HORIZONTAL_NAVBAR
}) => {

  const [page, setPage] = React.useState(posts)

  const switchPage = () => {
    if (page === EXAMPLE_CARD_POSTS) {
      setPage(NEWS)
      return
    }
    setPage(EXAMPLE_CARD_POSTS)
  }

  return (
    <Page>
      <Container>
        <Form>
          <SearchBox />
          <HorizontalNavigation>
            <HorizontalNavbar options={options} listOption={switchPage} />
          </HorizontalNavigation>
        </Form>
        <Content>
          {page.map((post, index) => (
            <HomeCard
              key={`${post.user}-${index}`}
              userPicture={post.profilePic}
              username={post.user}
              description={post.description}
              postDate={post.date}
              tag={post.tag}
              index = {index}
            />
          ))}
        </Content>
      </Container>
    </Page>
  )
}

export default Nest