import React from 'react'
import {
  Options,
  ButtonWrapper,
  ThemeButton,
  Label,
} from './Configuration.style'

const Configuration = ({handleDarkModeChange}) => (
    <Options>
      <ButtonWrapper>
        <p>Modo noturno</p>
        <ThemeButton defaultChecked={localStorage.getItem('favoriteTheme') === 'dark'} id='checkTheme' type="checkbox" onChange={event => handleDarkModeChange(event)} />
        <Label for='checkTheme'>Modo Noturno: </Label>
      </ButtonWrapper>
    </Options>
)

export default Configuration