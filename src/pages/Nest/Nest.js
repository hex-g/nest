import React, { useState, useContext } from 'react'
import {
  shape,
  string,
  arrayOf
} from 'prop-types'
import LogOutModal from '../../components/LogOutModal'
import HorizontalNavbar from '../../components/HorizontalNavbar'
import HomeCard from '../../components/HomeCard'
import SearchBox from '../../components/SearchBox'
import { handleLogout } from '../../utils/token/token'
import { THEME_COLORS, NEWS } from '../../config/constants'
import { ReactComponent as Sun } from '../../assets/sun.svg'
import { ReactComponent as Moon } from '../../assets/moon.svg'
import { ReactComponent as Notification } from '../../assets/notification.svg'
import { ReactComponent as LogOut } from '../../assets/exit.svg'
import themeContext from '../../utils/Contexts/themeContext'
import {
  Page,
  Container,
  Form,
  TopNavigation,
  HorizontalNavigation,
  Content,
  IconWrapper,
  Item,
  ThemeIcon,
  ThemeButton,
  Label
} from './Nest.style'

const EXAMPLE_HORIZONTAL_NAVBAR = ['STATUS', 'AVISOS']

const EXAMPLE_CARD_POSTS = [
  {
    user: 'Bianca Gomes',
    profilePic: 'https://media.licdn.com/dms/image/C5603AQEjf69Dgrzv3g/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=iWPiin6uQDgP2FXNYkHfIaafgdTPC2dIWxVAC4cKkQ0',
    description: 'compartilhou "Como realmente funciona o WATSON da IBM?" na HiveCentral',
    date: '20 Jan 2019',
    tag: ['Backend', 'AI']
  },
  {
    user: 'Ricardo Campos',
    profilePic: 'https://media.licdn.com/dms/image/C5603AQEjf69Dgrzv3g/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=iWPiin6uQDgP2FXNYkHfIaafgdTPC2dIWxVAC4cKkQ0',
    description: 'precisa de ajuda com "Como passar props para keyframes no styled-components utilizando React?" na HiveCentral',
    date: '20 Jan 1999',
    tag: ['Frontend', 'CSS', 'JS']
  },
  {
    user: 'Gabriela Delfino',
    profilePic: 'https://media.licdn.com/dms/image/C5603AQEjf69Dgrzv3g/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=iWPiin6uQDgP2FXNYkHfIaafgdTPC2dIWxVAC4cKkQ0',
    description: 'compartilhou "Cadastro em React com Formik ✨" na HiveCentral',
    date: '20 Jan 1999',
    tag: ['Frontend', 'JS']
  },
  {
    user: 'Gabriel Leme',
    profilePic: 'https://media.licdn.com/dms/image/C5603AQEjf69Dgrzv3g/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=iWPiin6uQDgP2FXNYkHfIaafgdTPC2dIWxVAC4cKkQ0',
    description: 'compartilhou a anotação "REST API com Node.Js" na HiveCentral',
    date: '20 Jan 1999',
    tag: ['Frontend', 'Backend', 'JS']
  },
  {
    user: 'Gustavo Batistuti',
    profilePic: 'https://media.licdn.com/dms/image/C5603AQEjf69Dgrzv3g/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=iWPiin6uQDgP2FXNYkHfIaafgdTPC2dIWxVAC4cKkQ0',
    description: 'compartilhou "Java 101 🚀" na HiveCentral',
    date: '20 Jan 1999',
    tag: ['Backend', 'Java']
  },
  {
    user: 'Carlos Rafael',
    profilePic: 'https://media.licdn.com/dms/image/C5603AQEjf69Dgrzv3g/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=iWPiin6uQDgP2FXNYkHfIaafgdTPC2dIWxVAC4cKkQ0',
    description: 'precisa de ajuda com "Enviem suas dúvidas sobre ASP.NET aqui 😊" na HiveShare',
    date: '20 Jan 1999',
    tag: ['ASP.NET']
  }
]

const Nest = ({ posts = EXAMPLE_CARD_POSTS, options = EXAMPLE_HORIZONTAL_NAVBAR }) => {
  const [page, setPage] = useState(posts)
  const [logOut, setLogOut] = useState(false)
  const { state, dispatchTheme } = useContext(themeContext)

  const switchPage = target => {
    switch (target) {
      case 0:
        setPage(EXAMPLE_CARD_POSTS)
        return
      case 1:
        setPage(NEWS)
        return
      default:
        setPage(EXAMPLE_CARD_POSTS)
    }
  }

  const handleDarkModeChange = () => {
    if (state.colorTheme === THEME_COLORS.LIGHT) {
      dispatchTheme({ type: 'SWITCH_THEME', payload: THEME_COLORS.DARK })
    } else {
      dispatchTheme({ type: 'SWITCH_THEME', payload: THEME_COLORS.LIGHT })
    }
  }


  return (
    <Page overlay={logOut}>
      <Container>
        {logOut ? <LogOutModal handleLogout={handleLogout} closeLogout={setLogOut} /> : false}
        <Form>
          <TopNavigation>
            <SearchBox />
            <IconWrapper>
              <Item>
                <Notification />
              </Item>
              <ThemeIcon>
                <ThemeButton
                  id='checkTheme'
                  type='checkbox'
                  onChange={handleDarkModeChange}
                />
                <Label
                  htmlFor='checkTheme'
                >
                  <div>{localStorage.getItem('favoriteTheme') === 'light' ? <Sun /> : <Moon />}</div>
                </Label>
              </ThemeIcon>
              <Item onClick={() => setLogOut(true)}>
                <LogOut />
              </Item>
            </IconWrapper>
          </TopNavigation>
          <HorizontalNavigation>
            <HorizontalNavbar options={options} listOption={switchPage} />
          </HorizontalNavigation>
        </Form>
        <Content>
          {page.map((post, index) => (
            <>
              <HomeCard
                key={`${post.user}`}
                userPicture={post.profilePic}
                username={post.user}
                description={post.description}
                postDate={post.date}
                tag={post.tag}
                index={index}
              />
            </>
          ))}
        </Content>
      </Container>
    </Page>
  )
}

Nest.propTypes = {
  posts: arrayOf(shape({
    user: string,
    profilePic: string,
    description: string,
    date: string,
    tag: string
  })).isRequired,
  options: arrayOf(string).isRequired
}

export default Nest
