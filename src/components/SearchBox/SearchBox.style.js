import styled from 'styled-components'
import { design, textColor, cardBackground } from '../Layout'

export const Search = styled.div`
  width: 500px;
  height: 35px;
  font-size: 16px;
  padding: 5px 5px;
  display: flex;
  justify-content: space-between;
  background-color: ${cardBackground};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  margin-bottom: 16px;
`

export const Input = styled.input`
  padding: 0 5px;
  flex-grow: 1;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: ${design.mediumText};
  color: ${textColor};

  &::placeholder {
    color: ${design.hoverOuterSpace};
    font-size: ${design.mediumText};
  }
`

export const Button = styled.button`
  width: 30px;
  padding: 5px 5px;
  background: transparent;
  outline: none;
  border: none;

  svg {
    fill: ${textColor};
  }
`
