import styled from 'styled-components'
import { cardBackground } from '../../components/Layout'

export const Page = styled.div`
  display: flex;
  min-height: 100%;
  width: inherit;
  padding: 0 24px;
`

export const Container = styled.div`
  padding: 10px 0;

  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

export const Search = styled.div`
  width: 500px;
  height: 35px;
  font-size: 16px;
  padding: 5px 5px;
  display: flex;
  justify-content: space-between;
  background-color: ${cardBackground};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  margin-bottom: 16px;
`

export const HorizontalNavigation = styled.div`
  padding: 10px 0;
  display: flex;
  list-style-type: none;
`


export const Form = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  padding-left: 5px;
`

export const TopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
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

export const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Item = styled.button`
  width: 40px;
  height: 40px;
  margin: 8px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`

export const ThemeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-bottom: 8px;
`

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const ThemeButton = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`
