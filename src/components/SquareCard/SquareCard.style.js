import styled from 'styled-components'
import { design } from '../Layout'

export default styled.div`
  box-shadow: ${design.postBoxShadow};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 250px;
  cursor: pointer;
  padding: 16px;
  position: relative;
`