import styled from 'styled-components'
import { design } from '../../../components/Layout'

export const Options = styled.div`
  width: 200px;
  height: auto;
  flex-grow: 1;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 40px;
  margin-right: 24px;
`

export const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 40px 0;
  margin-right: 24px;
`

export const Label = styled.label`
  cursor: pointer;
  background-color: ${design.wildSand};
  text-indent: -9999px;
  border: 2px solid ${design.burntSienna};
  width: 55px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  position: relative;

  &::after {
    content: '';
    background: ${design.burntSienna};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: ease-in-out 200ms;
  }
`

export const ThemeButton = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background-color: ${design.rajah};

    &::after {
      left: calc(100% - 5px);
      transform: translateX(-100%);
    }
  }
`

export const AnotherButton = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background-color: ${design.rajah};

    &::after {
      left: calc(100% - 5px);
      transform: translateX(-100%);
    }
  }
`

export const Description = styled.p`
  align-self: flex-start;
  padding-left: 8px;
  margin-bottom: 32px;
  font-weight: bold;
`

export const ButtonText = styled.p`
  align-self: center;
`

export const ButtonBox = styled.div`
  display: flex;
  align-content: center;
  margin-bottom: 16px;
`
