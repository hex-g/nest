import styled from 'styled-components'
import { design } from '../Layout'

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  transition: top 0.3s ease-in;
  height: auto;
  z-index: 3;
  top: -56px;
`

export const MessageBox = styled.div`
  height: 24px;
  padding: 16px 48px;
  background: ${design.hippieBlue};
  color: ${design.wildSand};
  font-family: ${design.primaryFont};
  font-size: ${design.largeText};
  border-radius: 0 0 7px 7px;
  text-align: center;
  min-width: 500px;
`
