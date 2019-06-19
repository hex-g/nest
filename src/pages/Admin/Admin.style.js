import styled from 'styled-components'
import { design, textColor, backgroundColor } from '../../components/Layout'

export const AdminWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 25%;
  justify-content: center;
  font-family: ${design.secondaryFont};
`

export const Title = styled.h2`
  margin: 24px 0;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${design.burntSienna};
`

export const FormTitle = styled.h2`
  display: ${props => props.show ? 'block' : 'none'};
  margin: 24px 0;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${design.burntSienna};
`

export const Choice = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  input {
    width: 30px;
    height: 30px;
    border: solid 2px #979797;
    margin: 0 10px 0 0;
  }
  label {
    margin-right: 20px;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    letter-spacing: normal;
    color: ${textColor};
  }
`

export const Form = styled.form`
  display: ${props => props.show ? 'grid' : 'none'};
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`

export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  label {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    letter-spacing: normal;
    color: ${design.burntSienna};
  }
  input {
    width: 308px;
    height: 34px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  }
`

export const ButtonWrapper = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  button {
    margin: 32px 0;
    margin-right: 28px;
    width: 140px;
    height: 50px;
    border: none;
    border-radius: 7px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: ${design.burntSienna};
    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${backgroundColor};
  }
`