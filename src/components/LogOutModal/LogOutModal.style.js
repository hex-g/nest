import styled from 'styled-components'
import { design, backgroundColor } from '../Layout'

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 90;
  width: 100vw;
  min-height: calc(100vh + 10px);
  position: fixed;
  display: flex;
  place-items: center;
  place-content: center;
  top: -10px;
  left: 100px;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 56px 48px 32px 48px;
  background-color: ${backgroundColor};
  position: relative;
  margin-right: 6%;
`

export const Title = styled.p`
  font-size: ${design.largeText};
  font-weight: bold;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  width: 140px;
  height: 50px;
  border: none;
  border-radius: 7px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: ${design.rajah};
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${backgroundColor};
  cursor: pointer;
`
