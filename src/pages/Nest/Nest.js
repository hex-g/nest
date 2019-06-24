import React from 'react'
import HorizontalNavbar from '../../components/HorizontalNavbar'
import HomeCard from '../../components/HomeCard'
import SearchBox from '../../components/SearchBox'
import { NEWS } from '../../config/constants'
import {
  Page,
  Container,
  Form,
  HorizontalNavigation,
  Content
} from './Nest.style'

const EXAMPLE_HORIZONTAL_NAVBAR = ['STATUS', 'AVISOS']

const EXAMPLE_CARD_POSTS = [
  {
    user: 'Bianca Gomes',
    profilePic: 'https://media.licdn.com/dms/image/C4E03AQHu7DPxBaDKjg/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=YYnIN1b0-xqG8k7XFjKnWGUyYiq7gP_yWbHnvx8UOz8',
    description: 'compartilhou "Como realmente funciona o WATSON da IBM?" na HiveCentral',
    date: '20 Jan 2019',
    tag: ['Backend', 'AI'],
  },
  {
    user: 'Ricardo Campos',
    profilePic: 'https://media.licdn.com/dms/image/C5603AQEjf69Dgrzv3g/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=8yki3HNX0RBYyQjfkbZkiq0TdAAEhUMj0bI4riFzAcU',
    description: 'precisa de ajuda com "Como passar props para keyframes no styled-components utilizando React?" na HiveCentral',
    date: '20 Jan 1999',
    tag: ['Frontend', 'CSS', 'JS'],
  },
  {
    user: 'Gabriela Delfino',
    profilePic: 'https://media.licdn.com/dms/image/C4D03AQHpHKmIBchH_g/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=8CMkenRCbsAIONMwcS-93Y3jQYoaum5KSO-2O1R6lME',
    description: 'compartilhou "Cadastro em React com Formik ✨" na HiveCentral',
    date: '20 Jan 1999',
    tag: ['Frontend', 'JS'],
  },
  {
    user: 'Gabriel Leme',
    profilePic: 'https://media.licdn.com/dms/image/C5603AQGEnvevPR8YpQ/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=BEmlWS3B2VTV7Kmf3qThKeEK2qz_603w6acQcnILgWk',
    description: 'compartilhou a anotação "REST API com Node.Js" na HiveCentral',
    date: '20 Jan 1999',
    tag: ['Frontend', 'Backend', 'JS'],
  },
  {
    user: 'Gustavo Batistuti',
    profilePic: 'https://media.licdn.com/dms/image/C4D03AQGLeGzA8BXGgg/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=js7pTO-dp3PYjpVkcfEFbkXNLrtNVFl9SXGvxuocg4w',
    description: 'compartilhou "Java 101 🚀" na HiveCentral',
    date: '20 Jan 1999',
    tag: ['Backend', 'Java'],
  },
  {
    user: 'Carlos Rafael',
    profilePic: 'https://media.licdn.com/dms/image/C4E03AQEQlPGvRt1zCA/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=xVP-NMahfdZt5Bpd1-vXyClax7oW75QUBE19LZ5-zvM',
    description: 'precisa de ajuda com "Enviem suas dúvidas sobre ASP.NET aqui 😊" na HiveShare',
    date: '20 Jan 1999',
    tag: ['ASP.NET'],
  },
]

const Nest = ({
  posts = EXAMPLE_CARD_POSTS,
  options = EXAMPLE_HORIZONTAL_NAVBAR
}) => {


  const [page, setPage] = React.useState(posts)

  const switchPage = (target) => {
    switch(target){
      case 0:
        setPage(EXAMPLE_CARD_POSTS)
        return;
      case 1:
        setPage(NEWS)
        return;
      default:
        setPage(EXAMPLE_CARD_POSTS)
        return;
    }
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