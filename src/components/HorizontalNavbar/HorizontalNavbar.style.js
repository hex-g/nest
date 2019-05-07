import styled from 'styled-components'

export const Wrapper = styled.ul`
  width: 100%;

  margin-top: 10px;

  display: flex;
  justify-content: space-around;

  list-style-type: none;
`

export const Item = styled.li`
  height: 20px;

  padding-bottom: 1px;

  font-weight: bold;

  color: ${props => props.activated ? '#f6bd60' : '#212121'};

  border-bottom: 3px solid ${props => props.activated ? '#f6bd60' : '#212121'};
`