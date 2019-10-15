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
import { submitForm } from './Admin.service'

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
        <label htmlFor='student-radio'>
          Aluno
          <input id='student-radio' type='radio' name='choice' onClick={() => setCurrentForm('student')} />
        </label>
        <label htmlFor='pedagogue-radio'>
          Professor
          <input id='pedagogue-radio' type='radio' name='choice' onClick={() => setCurrentForm('pedagogue')} />
        </label>
      </Choice>
      <FormTitle show={currentForm === 'student'}>Cadastro do aluno:</FormTitle>
      <Form id='student-form' show={currentForm === 'student'}>
        <FormElement>
          <label htmlFor='name-student'>
            Nome
            <input id='name-student' name='firstName' />
          </label>
        </FormElement>
        <FormElement>
          <label htmlFor='lastname-student'>
            Sobrenome
            <input id='lastname-student' name='lastName' />
          </label>
        </FormElement>
        <FormElement>
          <label htmlFor='username-student'>
            Usuário
            <input id='username-student' name='username' />
          </label>
        </FormElement>
        <FormElement>
          <label htmlFor='password-student'>
            Senha
            <input type='password' id='password-student' name='password' />
          </label>
        </FormElement>
        <FormElement>
          <label htmlFor='ra-student'>
            RA
            <input id='ra-student' name='ra' />
          </label>
        </FormElement>
      </Form>
      <FormTitle show={currentForm === 'pedagogue'}>Cadastro do professor:</FormTitle>
      <Form id='pedagogue-form' show={currentForm === 'pedagogue'}>
        <FormElement>
          <label htmlFor='name-pedagogue'>
            Nome
            <input id='name-pedagogue' name='firstName' />
          </label>
        </FormElement>
        <FormElement>
          <label htmlFor='lastname-pedagogue'>
            Sobrenome
            <input id='lastname-pedagogue' name='lastName' />
          </label>
        </FormElement>
        <FormElement>
          <label htmlFor='username-pedagogue'>
            Usuário
            <input id='username-pedagogue' name='username' />
          </label>
        </FormElement>
        <FormElement>
          <label htmlFor='password-pedagogue'>
            Senha
            <input type='password' id='password-pedagogue' name='password' />
          </label>
        </FormElement>
        <FormElement>
          <label htmlFor='rm-pedagogue'>
            RM
            <input id='rm-pedagogue' name='rm' />
          </label>
        </FormElement>
      </Form>
      <ButtonWrapper show={currentForm !== 'default'}>
        <button
          type='button'
          onClick={() => {
            document.querySelectorAll('input').forEach((el, i) => {
              // eslint-disable-next-line no-param-reassign
              if (i > 1) el.value = ''
            })
          }}
        >
          Limpar
        </button>
        <button type='button' onClick={handleFormSubmit}>Finalizar</button>
      </ButtonWrapper>
    </AdminWrapper>
  )
}


export default Admin
