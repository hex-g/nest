import React from 'react'
import {
  Options,
  ButtonWrapper,
  NotificationWrapper,
  ThemeButton,
  AnotherButton,
  Description,
  ButtonBox,
  ButtonText,
  Label,
} from './Configuration.style'

const Configuration = ({handleDarkModeChange}) => (
    <Options>
      <ButtonWrapper>
        <ButtonText>Modo noturno</ButtonText>
        <ThemeButton defaultChecked={localStorage.getItem('favoriteTheme') === 'dark'} id='checkTheme' type="checkbox" onChange={event => handleDarkModeChange(event)} />
        <Label for='checkTheme'>Modo Noturno: </Label>
      </ButtonWrapper>
      <NotificationWrapper>
        <Description>Notificações</Description>
        <ButtonBox>
          <ButtonText>HiveShare</ButtonText>
          <AnotherButton type='checkbox' id='hiveShare' />
          <Label for='hiveShare'>HiveShare</Label>
        </ButtonBox>
        <ButtonBox>
          <ButtonText>HiveCentral</ButtonText>
          <AnotherButton type='checkbox' id='hiveCentral' />
          <Label for='hiveCentral'>HiveCentral</Label>
        </ButtonBox>
        <ButtonBox>
          <ButtonText>Disciplinas</ButtonText>
          <AnotherButton type='checkbox' id='subjects' />
          <Label for='subjects'>Disciplinas</Label>
        </ButtonBox>     
      </NotificationWrapper>
    </Options>
)

export default Configuration