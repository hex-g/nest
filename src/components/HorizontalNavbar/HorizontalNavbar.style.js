import styled from 'styled-components'

export const ItensList = styled.ul`
  display: flex;
`

export const Item = styled.li`
  margin: 0 20px;

  font-weight: bold;

  color: ${props => props.activated ? '#f6bd60' : '#212121'};

  border-bottom: 3px solid ${props => props.activated ? '#f6bd60' : '#212121'};
`
