import React, { useState } from 'react'
import {
  AdminWrapper,
  Title,
  FormTitle,
  Choice,
  Form,
  FormElement
} from './Admin.style'

const Admin = () => {
  const [currentForm, setCurrentForm] = useState('nada')

  return (
    <AdminWrapper>
      <Title>Deseja cadastrar:</Title>
      <Choice>
        <input id="student-radio" type="radio" name="choice" onClick={() => setCurrentForm('student')} />
        <label for="student-radio">Aluno</label>
        <input id="pedagogue-radio" type="radio" name="choice" onClick={() => setCurrentForm('pedagogue')} />
        <label for="pedagogue-radio">Professor</label>
      </Choice>
      <FormTitle show={currentForm === 'student'}>Cadastro do aluno:</FormTitle>
      <Form show={currentForm === 'student'}>
          <FormElement>
            <label for="name-student">Nome</label>
            <input id="name-student" />
          </FormElement>
          <FormElement>
            <label for="username-student">Usuário</label>
            <input id="username-student" />
          </FormElement>
          <FormElement>
            <label for="ra-student">RA</label>
            <input id="ra-student" />
          </FormElement>
          <FormElement>
            <label for="lastname-student">Sobrenome</label>
            <input id="lastname-student" />
          </FormElement>
          <FormElement>
            <label for="password-student">Senha</label>
            <input id="password-student" />
          </FormElement>
      </Form>
      <FormTitle show={currentForm === 'pedagogue'}>Cadastro do professor:</FormTitle>
      <Form show={currentForm === 'pedagogue'}>
          <FormElement>
            <label for="name-pedagogue">Nome</label>
            <input id="name-pedagogue" />
          </FormElement>
          <FormElement>
            <label for="username-pedagogue">Usuário</label>
            <input id="username-pedagogue" />
          </FormElement>
          <FormElement>
            <label for="rm-pedagogue">RM</label>
            <input id="rm-pedagogue" />
          </FormElement>
          <FormElement>
            <label for="lastname-pedagogue">Sobrenome</label>
            <input id="lastname-pedagogue" />
          </FormElement>
          <FormElement>
            <label for="password-pedagogue">Senha</label>
            <input id="password-pedagogue" />
          </FormElement>
      </Form>
      <button type='button' onClick={(e) => {
        console.log(e)
      }}>Finalizar</button>
    </AdminWrapper>
  )
}


export default Admin
