import styled from 'styled-components'

export const Page = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
`

export const Navigation = styled.div`
  width: ${({ toggle }) => toggle ? '250px' : '100px'};

  display: flex;

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

export const Container = styled.div`
  padding: 10px 0;

  display: flex;
  flex-direction: column;
`

export const Form = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  padding-left: 5px;
`

export const Content = styled.div`
  flex-grow: 1;

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

export const Configuration = styled.div`

`