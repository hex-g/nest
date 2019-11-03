import React from 'react'
import { string } from 'prop-types'
import {
  Options,
  ButtonWrapper,
  NotificationWrapper,
  ThemeButton,
  AnotherButton,
  Description,
  ButtonBox,
  ButtonText,
  Label
} from './Configuration.style'

const Configuration = ({ handleDarkModeChange }) => (
  <Options>
    <ButtonWrapper>
      <ButtonText>Modo noturno</ButtonText>
      <ThemeButton defaultChecked={localStorage.getItem('favoriteTheme') === 'dark'} id='checkTheme' type='checkbox' onChange={event => handleDarkModeChange(event)} />
      <Label htmlFor='checkTheme'>Modo Noturno: </Label>
    </ButtonWrapper>
    <NotificationWrapper>
      <Description>Notificações</Description>
      <ButtonBox>
        <ButtonText>HiveShare</ButtonText>
        <AnotherButton type='checkbox' id='hiveShare' />
        <Label htmlFor='hiveShare'>HiveShare</Label>
      </ButtonBox>
      <ButtonBox>
        <ButtonText>HiveCentral</ButtonText>
        <AnotherButton type='checkbox' id='hiveCentral' />
        <Label htmlFor='hiveCentral'>HiveCentral</Label>
      </ButtonBox>
      <ButtonBox>
        <ButtonText>Disciplinas</ButtonText>
        <AnotherButton type='checkbox' id='subjects' />
        <Label htmlFor='subjects'>Disciplinas</Label>
      </ButtonBox>
    </NotificationWrapper>
  </Options>
)

Configuration.propTypes = {
  handleDarkModeChange: string.isRequired
}


export default Configuration
