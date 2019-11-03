import styled from 'styled-components'
import { design, backgroundScroll } from '../components/Layout'

export const TemplateSection = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const Navigation = styled.div`
  z-index: 2;
  transition: 150ms;
`

export const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  z-index: 1;

  &::-webkit-scrollbar {
    width: 3px;
    background-color: ${design.wildSand};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${backgroundScroll};
  }
`

export const Informations = styled.div`
  width: ${({ isOpen }) => (isOpen ? '350px' : '105px')};
  max-height: 100vh;
  overflow: hidden;
  z-index: 2;
  transition: 150ms;
`
