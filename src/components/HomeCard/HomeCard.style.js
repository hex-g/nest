import styled from 'styled-components'
import { design, cardBackground } from '../Layout'

export const Wrapper = styled.div`
  height: 115px;
  padding: 16px 16px;
  margin: 8px 0;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  background-color: ${cardBackground};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(21,21,21,0.2);
`

export const UserPicture = styled.img`
  max-width: 80px;
  max-height: 80px;
  object-fit: cover;
  align-self: center;
`

export const Content = styled.div`
  margin-left: 30px;
  font-size: 18px;
  align-self: center;
`

export const Username = styled.p`
  margin-bottom: 8px;
  font-weight: bold;
`

export const Description = styled.p`
`

export const Date = styled.p`
  text-align: right;
  font-size: 12px;
`

export const Tag = styled.button`
  background: ${props => {
    if (props.color <= 1) {
      return design.heliotrope
    } else if (props.color >= 2 && props.color <= 3) {
      return design.carnation
    } else if (props.color >= 4 && props.color <= 5) {
      return design.eletricViolet
    } else if (props.color >= 6 && props.color <= 7) {
      return design.laPalma
    } else if (props.color >= 8 && props.color <= 9) {
      return design.catalinaBlue
    } else {
      return design.gold
    }
  }};
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  color: ${design.wildSand};
  margin: 8px 8px 0 0;
`