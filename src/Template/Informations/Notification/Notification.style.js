
import styled from 'styled-components'
import { design, codeBackground, backgroundScroll } from '../../../components/Layout'

export const Notifications = styled.div`
  width: 200px;
  max-height: 70vh;
  overflow-y: auto;
  padding: 5px;
  border-radius: 4px;

  &::-webkit-scrollbar {
    width: 3px;
    background-color: ${design.wildSand};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${backgroundScroll};
  }
`

export const Notify = styled.p`
  border-bottom: 1px solid ${codeBackground};
  padding: 16px 5px 24px 5px;
  max-height: 200px;
  font-size: 12px;
  white-space: normal; 
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Username = styled.span`
  font-weight: bold;
`

export const Description = styled.p`
  padding-top: 5px;
`