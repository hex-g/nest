import styled from 'styled-components'

export const TemplateSection = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const Navigation = styled.div`
  width: ${({isOpen}) => isOpen ? '255px' : '105px'};
  z-index: 2;
  transition: 150ms;
`

export const Content = styled.div`
  overflow-y: auto;
  width: 100%;
  padding: 0 24px;
  z-index: 1;
`

export const Informations = styled.div`
  width: ${({isOpen}) => isOpen ? '300px' : '105px'};
  z-index: 2;
  transition: 150ms;
`