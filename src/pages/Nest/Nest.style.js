import styled from 'styled-components'

export const Page = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
`

export const Container = styled.div`
  flex-grow: 1;

  padding: 10px 0;

  display: flex;
  flex-direction: column;
`

export const Form = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  padding: 0 5px;
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