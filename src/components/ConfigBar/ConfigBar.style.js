import styled from 'styled-components'

export const Wrapper = styled.div`
  width: ${({open}) => open ? '200px' : '50px'};

  display: flex;
  flex-direction: column;
  align-items: ${({open}) => open ? 'flex-start' : 'center'};;

  transition: 150ms;
`

export const ItemsList = styled.ul`

`

export const ConfigurationButton = styled.button`
  width: 40px;
  height: 40px;

  padding: 5px 5px;

  background: transparent;
  outline: none;
  border: none;
  border-radius: 4px;

  &:hover{
    background: rgba(21,21,21,0.05);
    cursor: pointer;
  }
`