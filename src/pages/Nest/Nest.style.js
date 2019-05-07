import styled from 'styled-components'

export const Page = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  width: 60%;

  padding: 20px 45px;
`

export const Content = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

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