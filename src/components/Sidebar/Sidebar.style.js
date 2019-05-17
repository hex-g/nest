import styled from 'styled-components'

export const Aside = styled.aside`
  height: 100%;
  display: flex;
  transition: 300ms;
`

export const Menu = styled.div`
  flex-grow: 1;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #d8d8d8;
  background: ${props => props.theme.wildSand};
`

export const ToggleArea = styled.div`
  display: flex;
`

export const ProfileContent = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > p{
    ${({ isOpen }) => isOpen ? 'display: block' : 'display: none'}
  }
`

export const UserImage = styled.div`
  width: 50px;
  height: 50px;
  background: blue;
`

export const Username = styled.p`
  font-weight: bold;
`

export const NavigationItems = styled.ul`
  width: inherit;
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Item = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;

  & > a{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ItemIcon = styled.div`
  width: 30px;
  height: 30px;
  background: blue;
`

export const ItemTitle = styled.p`
  padding: 5px 10px;
  flex-grow: 1;
  ${({ isOpen }) => isOpen ? 'display: inline-block' : 'display: none'};
`

export const LogoWrapper = styled.div`
  width: 80px;
  height: 80px;
  ${({ isOpen }) => isOpen ? 'display: block' : 'display: none'};  
`

export const Logo = styled.div`
  width: 100%;
  height: 100%
  background: blue;
`

export const ToggleButton = styled.button`
flex-grow: 1;
margin-left: 3px;
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
  transform: ${({ isOpen }) => isOpen ? 'rotate(40deg)' : 'rotate(-40deg)'};
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
  transform: ${({ isOpen }) => isOpen ? 'rotate(-40deg)' : 'rotate(40deg)'};
  opacity: 1;
}
`