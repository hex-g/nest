/* eslint-disable jsx-a11y/label-has-associated-control */
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
        <input id='student-radio' type='radio' name='choice' onClick={() => setCurrentForm('student')} />
        <label htmlFor='student-radio'>Aluno</label>
        <input id='pedagogue-radio' type='radio' name='choice' onClick={() => setCurrentForm('pedagogue')} />
        <label htmlFor='pedagogue-radio'>Professor</label>
        <input id='subject-radio' type='radio' name='choice' onClick={() => setCurrentForm('subject')} />
        <label htmlFor='subject-radio'>Disciplina</label>
      </Choice>
      <FormTitle show={currentForm === 'student'}>Cadastro do aluno:</FormTitle>
      <Form id='student-form' show={currentForm === 'student'}>
        <FormElement>
          <label htmlFor='name-student'>Nome</label>
          <input id='name-student' name='firstName' />
        </FormElement>
        <FormElement>
          <label htmlFor='lastname-student'>Sobrenome</label>
          <input id='lastname-student' name='lastName' />
        </FormElement>
        <FormElement>
          <label htmlFor='username-student'>Usuário</label>
          <input id='username-student' name='username' />
        </FormElement>
        <FormElement>
          <label htmlFor='password-student'>Senha</label>
          <input type='password' id='password-student' name='password' />
        </FormElement>
        <FormElement>
          <label htmlFor='ra-student'>RA</label>
          <input id='ra-student' name='ra' />
        </FormElement>
        <FormElement>
          <label htmlFor='cpf-student'>CPF</label>
          <input id='cpf-student' name='cpf' />
        </FormElement>
        <FormElement>
          <label htmlFor='email-student'>E-Mail</label>
          <input id='email-student' name='email' />
        </FormElement>
        <FormElement>
          <label htmlFor='year-student'>Ano Letivo</label>
          <input id='year-student' name='year' />
        </FormElement>
      </Form>
      <FormTitle show={currentForm === 'pedagogue'}>Cadastro do professor:</FormTitle>
      <Form id='pedagogue-form' show={currentForm === 'pedagogue'}>
        <FormElement>
          <label htmlFor='name-pedagogue'>Nome</label>
          <input id='name-pedagogue' name='firstName' />
        </FormElement>
        <FormElement>
          <label htmlFor='lastname-pedagogue'>Sobrenome</label>
          <input id='lastname-pedagogue' name='lastName' />
        </FormElement>
        <FormElement>
          <label htmlFor='username-pedagogue'>Usuário</label>
          <input id='username-pedagogue' name='username' />
        </FormElement>
        <FormElement>
          <label htmlFor='password-pedagogue'>Senha</label>
          <input type='password' id='password-pedagogue' name='password' />
        </FormElement>
        <FormElement>
          <label htmlFor='rm-pedagogue'>RM</label>
          <input id='rm-pedagogue' name='rm' />
        </FormElement>
        <FormElement>
          <label htmlFor='email-pedagogue'>E-Mail</label>
          <input id='email-pedagogue' name='email' />
        </FormElement>
        <FormElement>
          <label htmlFor='cpf-pedagogue'>CPF</label>
          <input id='cpf-pedagogue' name='cpf' />
        </FormElement>
        <FormElement>
          <label htmlFor='subject-pedagogue'>Disciplina</label>
          <input id='subject-pedagogue' name='subject' />
        </FormElement>
      </Form>
      <FormTitle show={currentForm === 'subject'}>Cadastro da disciplina:</FormTitle>
      <Form id='subject-form' show={currentForm === 'subject'}>
        <FormElement>
          <label htmlFor='name-subject'>Nome</label>
          <input id='name-subject' name='name' />
        </FormElement>
        <FormElement>
          <label htmlFor='hours-subject'>Carga Horaria</label>
          <input id='hours-subject' name='hours' />
        </FormElement>
        <FormElement>
          <label htmlFor='days-subject'>Dias de Aula</label>
          <input id='days-subject' name='days' />
        </FormElement>
        <FormElement>
          <label htmlFor='pedagogue-subject'>Professor</label>
          <input id='pedagogue-subject' name='pedagogue' />
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
