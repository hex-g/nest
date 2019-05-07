import styled from 'styled-components'

export const Wrapper = styled.ul`
  width: 100%;

  margin: 10px 0;

  display: flex;
  justify-content: flex-start;

  list-style-type: none;
`

export const Item = styled.li`
  margin: 0 20px;
  height: 20px;

  padding-bottom: 1px;

  font-weight: bold;

  color: ${props => props.activated ? '#f6bd60' : '#212121'};

  border-bottom: 3px solid ${props => props.activated ? '#f6bd60' : '#212121'};
`