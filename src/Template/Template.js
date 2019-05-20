import React, { useState, useReducer } from 'react'
import styled from 'styled-components'
import Layout, { design } from '../components/Layout'
import Sidebar from '../components/Sidebar'
import InfoBar from '../components/InfoBar'
import { SIDEBAR_PAGES } from '../config/constants'
import {
  TemplateSection,
  Navigation,
  Content,
  Informations,
} from './Template.style'

// Remover
const user = {
  username: 'Caio',
  image: 'red',
}

const Template = ({ children }) => {

  const changeTheme = () => {
    const themeButton = document.getElementById('checkTheme')

    if (themeButton.checked === true) {
      localStorage.setItem('favoriteTheme', 'dark')
      setColor(localStorage.getItem('favoriteTheme'))
      localStorage.setItem('checkTheme', themeButton.checked)
      return
    }
    localStorage.setItem('favoriteTheme', 'light')
    setColor(localStorage.getItem('favoriteTheme'))
    localStorage.setItem('checkTheme', themeButton.checked = false)
  }

  console.log(localStorage.getItem('checkTheme'))

   const Configuration = () => {

    const Options = styled.div`
      width: 200px;
      height: 100%;
    `

    const ButtonWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 0;
    `
    
    const Label = styled.label`
      cursor: pointer;
      text-indent: -9999px;
      background-color: ${design.wildSand};
      border: 2px solid ${design.burntSienna};
      width: 55px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      position: relative;

      &::after {
        content: '';
        background: ${design.burntSienna};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        left: 4px;
        transition: ease-in-out 200ms;
      }
    `
    const ThemeButton = styled.input`
      height: 0;
      width: 0;
      visibility: hidden;

      &:checked + label {
        background-color: ${design.rajah};

        &::after {
          left: calc(100% - 5px);
          transform: translateX(-100%);
        }
      }
    `

    return (
      <Options>
        <ButtonWrapper>
          <p>Modo noturno</p>
          <ThemeButton id='checkTheme' type="checkbox" onChange={() => changeTheme()} />
          <Label for='checkTheme'>Modo Noturno: </Label>
        </ButtonWrapper>
      </Options>
    )
   }

  const informationReducer = (state, action) => {
    switch (action.type) {
      case 'configuration':
        return (<Configuration />)
      default:
        throw new Error()
    }
  }

  const [toggleNavigation, handleToggleNavigation] = useState(false)
  const [color, setColor] = useState(localStorage.getItem('favoriteTheme'))
  const [toggleInformation, handleToggleInformation] = useState(false)
  const [information, dispatch] = useReducer(informationReducer, null)

  return (
    <Layout color={color}>
      <TemplateSection>
        <Navigation isOpen={toggleNavigation}>
          <Sidebar
            isOpen={toggleNavigation}
            handleToggleNavigation={() => handleToggleNavigation(!toggleNavigation)}
            pages={SIDEBAR_PAGES}
            userInfo={user} 
          />
        </Navigation>
        <Content isOpen={toggleNavigation}>
          {children}
        </Content>
        <Informations isOpen={toggleInformation}>
          <InfoBar
            isOpen={toggleInformation}
            handleToggleInformation={() => handleToggleInformation(!toggleInformation)}
            handleInformationChange={dispatch}
            information={information}
          />
        </Informations>
      </TemplateSection>
    </Layout>
  )
}

export default Template