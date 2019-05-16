import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  min-height: 100%;
  width: inherit;
`

export const Navigation = styled.div`
  width: ${({isOpen}) => isOpen ? '304px' : '64px'};
  display: flex;

  position: relative;
  z-index: 2;

  transition: 150ms;
`

export const NavigationAndContent = styled.div`
  display: flex;
  flex: 1 1 auto;
`

export const Container = styled.div`
  min-width: 0px;
  padding: 10px 0;

  position: relative;

  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

export const Configuration = styled.div`
  width: ${({isOpen}) => isOpen ? '200px' : '50px'};

  display: flex;
  flex-direction: column;
  align-items: ${({isOpen}) => isOpen ? 'flex-start' : 'center'};;

  transition: 150ms;
`

export const Search = styled.div`
  width: 500px;
  height: 35px;

  font-size: 16px;

  padding: 5px 5px;

  display: flex;
  justify-content: space-between;
  
  background-color: rgba(255,255,255,0.5);
  
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
`

export const HorizontalNavigation = styled.div`
  padding: 10px 0;

  display: flex;

  list-style-type: none;

  overflow-x: scroll;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
  }
  &::-webkit-scrollbar {
    height: 2px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555555;
  }
`


export const Form = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  padding-left: 5px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 5px;

  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
  }
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555555;
  }
`
