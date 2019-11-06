import styled from 'styled-components'
import { design } from '../Layout'

export const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

export const LoginWrapper = styled.div`
  min-width: 300px;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Logo = styled.div`
  position: relative;
  top: 40px;

  tspan {
    font-family: ${design.primaryFont}, sans-serif;
  }
`

export const Title = styled.h2`
  font-family: ${design.primaryFont}, sans-serif;
  font-size: ${design.smallTitle};
  margin-top: 24px;
  text-align: center;

  span {
    font-weight: bold;
    color: ${design.rajah};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
  min-width: 270px;
`

export const Label = styled.p`
  padding-left: 5px;
  margin-top: 20px;
  line-height: 1.3em;
  font-family: ${design.secondaryFont}, sans-serif;
  font-size: ${design.mediumText};
  font-weight: bold;
`

export const TextInput = styled.input`
  text-align: left;
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
  margin-top: 10px;
  height: 50px;
  padding: 10px 10px;
  border-radius: 7px;
  outline: none;
  border: none;
  box-shadow: ${design.inputBoxShadow};

  &::placeholder {
    color: ${design.placeholderOuterSpace};
    font-size: ${design.mediumText};
  }
`

export const Button = styled.button`
  width: 140px;
  height: 50px;
  border-radius: 7px;
  box-shadow: ${design.buttonBoxShadow};
  text-align: center;
  font-size: ${design.mediumText};
  margin: 20px;
  margin-top: 48px;
  background: ${design.hippieBlue};
  color: ${design.wildSand};
  font-weight: bold;
  outline: none;
  border: none;
  align-self: center;
  cursor: pointer;
`
export const Description = styled.p`
  text-align: center;
  line-height: 1.3em;
  font-family: ${design.secondaryFont}, sans-serif;
  font-size: ${design.mediumText};

  a {
    font-weight: bold;
    text-decoration: none;
    color: ${design.rajah};
  }
`
