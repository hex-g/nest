import React from 'react'
import { func } from 'prop-types'
import PokeData from '../Pokedexdata'
import {
  Wrapper,
  Title,
  ButtonWrapper,
  Button,
  Overlay
} from './LogOutModal.style'

const LogOutModal = ({ handleLogout, closeLogout }) => {
  const playerName = PokeData().firstName

  return (
    <Overlay>
      <Wrapper>
        <Title>{`Deseja realmente sair da sessão, ${playerName}?`}</Title>
        <ButtonWrapper>
          <Button type='button' onClick={() => handleLogout()}>Sim</Button>
          <Button type='button' onClick={() => closeLogout(false)}>Não</Button>
        </ButtonWrapper>
      </Wrapper>
    </Overlay>
  )
}

export default LogOutModal

LogOutModal.propTypes = {
  handleLogout: func.isRequired,
  closeLogout: func.isRequired
}
