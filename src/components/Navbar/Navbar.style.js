import styled from 'styled-components'

export const Sidebar = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0px;
  width: inherit;
  z-index: 300;
  transition: height 0.25s ease-in-out 0s;
`

export const Menu = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: rgb(255,150,50);
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p{
    ${({ isOpen }) => isOpen ? 'display: block' : 'display: none'}
  }
`

export const UserPicture = styled.div`
  width: 50px;
  height: 50px;

  margin-top: 30px;

  background-image: url("https://img.fireden.net/v/image/1462/63/1462638729784.png");
  background-size: cover;
`
export const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
`

export const Navigation = styled.div`
  width: 100%;

  margin-top: 44px;

  display: flex;
  justify-content: center;
`

export const NavItem = styled.li`
  margin: 24px 0;

  display: flex;
  align-items: center;

  & > p{
    ${({ isOpen }) => isOpen ? 'display: block' : 'display: none'}
  }
`

export const NavItemImage = styled.div`
  width: 30px;
  height: 30px;

  background-image: ${props => props.image};
  background-size: cover;
`

export const NavItemText = styled.p`
  font-size: 16px;
  
`

export const Logo = styled.div`
  width: 100px;
  height: 100px;

  margin-bottom: 20px;

  background-image: url("https://img.fireden.net/v/image/1462/63/1462638729784.png");
  background-size: cover;  

  ${({ isOpen }) => isOpen ? 'display: block' : 'display: none'}
`

export const ToggleContainer = styled.div`
  display: flex;

  width: 15px;

  &::before{
    content: "";
    height: 100%;
    border-left: 2px solid rgba(220,170,50,0.5);
    position: absolute;
    opacity: 0;
    transition: 0.5s;
  }
  
  &:hover::before{
    opacity: 1;
  }

`

export const OpenButton = styled.button`
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