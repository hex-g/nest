import styled from 'styled-components'

export const Aside = styled.aside`
  height: 100%;
  display: flex;
`

export const Menu = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #d8d8d8;
  background: ${props => props.theme.wildSand};
`

export const ItemsMenu = styled.div`
  display: flex;
  ${({ isOpen }) => isOpen ? 'flex-direction: row' : 'flex-direction: column'};
  ${({ isOpen }) => isOpen ? 'justify-content: flex-' : 'align-items: center'};
  transition-delay: 200ms;
  border: 1px solid green;
`

export const Information = styled.div`
  height: 100%;
  padding: 8px 0;
  border: 1px solid red;
`

export const Item = styled.button`
  width: 40px;
  height: 40px;
  margin: 8px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`

export const ToggleArea = styled.div`
  display: flex;
`

export const ToggleButton = styled.button`
flex-grow: 1;
margin-right: 3px;
background: transparent;
outline: none;
border: none;
cursor: pointer;

&::before{
  content:"";
  background-color: rgb(255,160,50);
  width: 2px;
  height: 10px;
  position: absolute;
  opacity: 1;
  transform: rotate(0deg);
  transform-origin: 1px 7px;
  margin-top: -7.4px;
  transition: transform 200ms ease-in-out 0s, opacity 100ms ease-in-out 200ms;
}

&:hover::before{
  transform: ${({ isOpen }) => isOpen ? 'rotate(-40deg)' : 'rotate(40deg)'};
  opacity: 1;
}

&::after{
  content:"";
  background-color: rgb(255,160,50);
  width: 2px;
  height: 10px;
  position: absolute;
  opacity: 1;
  transform: rotate(0deg);
  transform-origin: 1px 3px;
  transition: transform 200ms ease-in-out 0s, opacity 100ms ease-in-out 200ms;
}

&:hover::after{
  transform: ${({ isOpen }) => isOpen ? 'rotate(40deg)' : 'rotate(-40deg)'};
  opacity: 1;
}
`
