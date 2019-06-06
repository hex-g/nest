import styled from 'styled-components'
import {design, textColor} from '../../components/Layout'

export const AdminWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 25%;
  justify-content: center;
`

export const AdminTitle = styled.h2`
color: ${design.burntSienna};
`

export const AdminInput = styled.input`
  font-size: ${design.mediumText};
  color: ${textColor};

  &::placeholder {
    font-size: ${design.mediumText};
  }
`