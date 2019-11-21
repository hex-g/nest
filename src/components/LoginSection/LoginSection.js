import React from 'react'
import { bool, func } from 'prop-types'
import {
  Section,
  LoginWrapper,
  Logo,
  Title,
  TextInput,
  Form,
  Label,
  Button,
  Description
} from './LoginSection.style'
import SvgMapping from '../SvgMapping'

const LoginSection = props => {
  const { lockFields: lock } = props
  return (
    <Section>
      <LoginWrapper>
        <Logo>
          <SvgMapping name='logo' />
        </Logo>
        <Title>Entre na <span>Hive</span> da sua instituição!</Title>
        <Form>
          <Label>Usuário</Label>
          <TextInput type='text' placeholder='Nome de Usuário' id='usernameInput' onChange={e => props.onUsernameChange(e.target.value)} disabled={lock} />
          <Label>Senha</Label>
          <TextInput type='password' placeholder='Senha' id='passwordInput' onChange={e => props.onPasswordChange(e.target.value)} disabled={lock} />
          <Button onClick={event => {
            event.preventDefault()
            props.onButtonClick()
          }}
          >
              Entrar
          </Button>
        </Form>
        <Description>
          Ainda não possui uma conta? <a href='http://hive-lp.netlify.com/RegisterAccount/'> Cadastre-se </a> agora mesmo! :)
        </Description>
      </LoginWrapper>
    </Section>
  )
}

LoginSection.defaultProps = {
  lockFields: false
}

LoginSection.propTypes = {
  lockFields: bool,
  onUsernameChange: func.isRequired,
  onPasswordChange: func.isRequired,
  onButtonClick: func.isRequired
}

export default LoginSection
