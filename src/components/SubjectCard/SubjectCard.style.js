import styled from 'styled-components'
import { design, cardBackground } from '../Layout'

export const Wrapper = styled.div`
  height: 115px;
  padding: 16px 24px;
  margin: 16px 0;
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  background-color: ${cardBackground};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(21,21,21,0.2);
`

export const Image = styled.div`
  max-width: 80px;
  max-height: 80px;
  margin-right: 16px;
  align-self: center;
  cursor: pointer;
`

export const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  font-size: 18px;
  align-self: center;
`

export const TaskName = styled.p`
  margin-bottom: 8px;
  font-weight: bold;
`

export const Description = styled.p`
`

export const FileName = styled.p`
  margin-bottom: 8px;
  font-weight: bold;
  align-self: end;

  span {
    font-weight: lighter;
    margin-left: 8px;
  }
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Date = styled.p`
  text-align: right;
  font-size: 12px;
`

export const CheckBox = styled.input`
  appearance: none;
  position: relative;
  width: 20px;
  height: 20px;
  align-self: flex-end;
  background-color: none;
  border: 2px solid ${design.rajah};
  border-radius: 4px;

  &::after {
    display: none;
    position: absolute;
    bottom: -6px;
    left: -2px;
    content: '✔';
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    color: ${design.burntSienna};
  }

  &:checked {
    background-color: ${design.rajah};

    &::after {
      display: block;
    }
  }
`