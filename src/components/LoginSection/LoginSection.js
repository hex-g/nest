import React from 'react'
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

const LoginSection = (props) => {
  let lock = props.lockFields
  return (
    <Section>
      <LoginWrapper>
        <Logo>
          <SvgMapping name='logo' />
        </Logo>
        <Title>Entre na <span>Hive</span> da sua instituição!</Title>
        <Form>
          <Label>Usuário</Label>
          <TextInput type='text' placeholder='Nome de Usuário' id="usernameInput" onChange={(e) => props.onUsernameChange(e.target.value)} disabled={lock} />
          <Label>Senha</Label>
          <TextInput type='password' placeholder='Senha' id="passwordInput" onChange={(e) => props.onPasswordChange(e.target.value)} disabled={lock} />
        </Form>
        <Button onClick={() => props.onButtonClick()} >Entrar</Button>
        <Description>
          Ainda não possui uma conta? <a href='http://hive-lp.netlify.com/RegisterAccount/'> Cadastre-se </a> agora mesmo! :)
        </Description>
      </LoginWrapper>
    </Section>
  )
}

export default LoginSection
