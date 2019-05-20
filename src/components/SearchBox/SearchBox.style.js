import styled from 'styled-components'
import { design, textColor } from '../Layout'

export const Input = styled.input`
  padding: 0 5px;
  flex-grow: 1;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: ${design.mediumText};
  color: ${textColor};

  &::placeholder {
    font-size: ${design.mediumText};
  }
`

export const Button = styled.button`
width: 30px;
padding: 5px 5px;
background: transparent;
outline: none;
border: none;
`
