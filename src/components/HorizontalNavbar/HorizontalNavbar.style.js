import styled from 'styled-components'
import { design } from '../Layout'

export const ItensList = styled.ul`
  display: flex;
  width: 0vw;
`

export const Item = styled.li`
  margin: 0 15px;
  font-weight: ${props => props.activated ? 'bold' : 'lighter'};
  font-size: ${design.largeText};
  color: ${props => props.activated && '#f6bd60'};
  text-transform: uppercase;
  padding: 0 20px 3px 0;
  border-bottom: 3px solid ${props => props.activated ? '#f6bd60' : 'none'};
  cursor: pointer;
`

export const OptionButton = styled.button`
  background: none;
  border: none;
  outline: none;
`
