import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
`

export const NavigationAndContent = styled.div`
  display: flex;
  flex: 1 1 auto;
`

export const Navigation = styled.div`
  width: ${({isOpen}) => isOpen ? '205px' : '50px'};
  position: relative;
  z-index: 2;
  transition: 150ms;
`

export const Content = styled.div`
  width: 100%;
  padding-left: ${({isOpen}) => isOpen ? '-20px' : '20px'};
  position: relative;
  z-index: 1;
`