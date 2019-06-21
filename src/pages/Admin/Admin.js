import React, { useState } from 'react'
import {
  AdminWrapper,
  Title,
  FormTitle,
  Choice,
  Form,
  FormElement,
  ButtonWrapper
} from './Admin.style'
import { submitForm } from "./Admin.service";

const Admin = () => {
  const [currentForm, setCurrentForm] = useState('default')

  const handleFormSubmit = () => {

    submitForm(currentForm, new FormData(document.querySelector(`#${currentForm}-form`)))
      .then(() => alert('Sucesso!'))
      .catch(reason => alert(reason))
  }

  return (
    <AdminWrapper>
      <Title>Deseja cadastrar:</Title>
      <Choice>
        <input id="student-radio" type="radio" name="choice" onClick={() => setCurrentForm('student')} />
        <label htmlFor="student-radio">Aluno</label>
        <input id="pedagogue-radio" type="radio" name="choice" onClick={() => setCurrentForm('pedagogue')} />
        <label htmlFor="pedagogue-radio">Professor</label>
      </Choice>
      <FormTitle show={currentForm === 'student'}>Cadastro do aluno:</FormTitle>
      <Form id="student-form" show={currentForm === 'student'}>
          <FormElement>
            <label htmlFor="name-student">Nome</label>
            <input id="name-student" name="firstName" />
          </FormElement>
          <FormElement>
            <label htmlFor="lastname-student">Sobrenome</label>
            <input id="lastname-student" name="lastName" />
          </FormElement>
          <FormElement>
            <label htmlFor="username-student">Usuário</label>
            <input id="username-student" name="username" />
          </FormElement>
          <FormElement>
            <label htmlFor="password-student">Senha</label>
            <input type="password" id="password-student" name="password" />
          </FormElement>
          <FormElement>
            <label htmlFor="ra-student">RA</label>
            <input id="ra-student" name="ra" />
          </FormElement>
      </Form>
      <FormTitle show={currentForm === 'pedagogue'}>Cadastro do professor:</FormTitle>
      <Form id="pedagogue-form" show={currentForm === 'pedagogue'}>
          <FormElement>
            <label htmlFor="name-pedagogue">Nome</label>
            <input id="name-pedagogue" name="firstName" />
          </FormElement>
          <FormElement>
            <label htmlFor="lastname-pedagogue">Sobrenome</label>
            <input id="lastname-pedagogue" name="lastName" />
          </FormElement>
          <FormElement>
            <label htmlFor="username-pedagogue">Usuário</label>
            <input id="username-pedagogue" name="username" />
          </FormElement>
          <FormElement>
            <label htmlFor="password-pedagogue">Senha</label>
            <input type="password" id="password-pedagogue" name="password" />
          </FormElement>
          <FormElement>
            <label htmlFor="rm-pedagogue">RM</label>
            <input id="rm-pedagogue" name="rm" />
          </FormElement>
      </Form>
      <ButtonWrapper show={currentForm !== 'default'}>
        <button type="button" onClick={() => {
          document.querySelectorAll('input').forEach((el, i) => {if (i > 1) el.value = ""})
        }}>Limpar</button>
        <button type="button" onClick={handleFormSubmit}>Finalizar</button>
      </ButtonWrapper>
    </AdminWrapper>
  )
}


export default Admin
