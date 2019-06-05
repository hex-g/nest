import styled from 'styled-components'
import { cardBackground } from '../Layout'

export const Wrapper = styled.div`
  padding: 16px 16px;
  margin: 8px 0;
  display: flex;
  justify-content: space-around;
  background-color: ${cardBackground};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(21,21,21,0.2);
`

export const UserPicture = styled.img`
  max-width: 80px;
  max-height: 80px;
  object-fit: cover;
`

export const Content = styled.div`
  margin-left: 30px;
  font-size: 18px;  
  flex-grow: 1;
`

export const Username = styled.p`
  margin-bottom: 8px;
  font-weight: bold;
`

export const Description = styled.p`
`

export const Date = styled.p`
  font-size: 12px;
`