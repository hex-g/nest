import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  width: ${({ toggle }) => toggle ? '20%' : '5%'};

  display: flex;
  align-items: center;

  transition: 0.5s;
`

export const Menu = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-right: 1px solid gray;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p{
    ${({ toggle }) => toggle ? 'display: block' : 'display: none'}
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
  margin-top: 15px;

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
    ${({ toggle }) => toggle ? 'display: block' : 'display: none'}
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

  margin-bottom: 21px;

  background-image: url("https://img.fireden.net/v/image/1462/63/1462638729784.png");
  background-size: cover;  

  ${({ toggle }) => toggle ? 'display: block' : 'display: none'}
`

export const ToggleContainer = styled.div`
  
`

export const ToggleButton = styled.button`
  height: 100%;

  z-index: 1;

  background: transparent;
  outline: none;
  border: none;

  &:hover{
    border-left: 2px solid #212121;
    transition: 0.2s;
  }

  &::before{
    content:"";
    background-color: #212121;
    width: 2px;
    height: 10px;
    position:absolute;
    opacity: 0;
    transform: rotate(0deg);
    transform-origin: 1px 7px;
    margin-top: -7px;
    transition: transform 200ms ease-in-out 0s, opacity 300ms ease-in-out 200ms;
  }

  &:hover::before{
    transform: ${({toggle}) => toggle ? 'rotate(40deg)' : 'rotate(-40deg)'};
    opacity: 1;
  }

  &::after{
    content:"";
    background-color: #aaaaaa;
    width: 2px;
    height: 10px;
    position:absolute;
    opacity: 0;
    margin-top: 0px;
    transform: rotate(0deg);
    transform-origin: 1px 3px;
    transition: transform 200ms ease-in-out 0s, opacity 300ms ease-in-out 200ms;
  }

  &:hover::after{
    transform: ${({toggle}) => toggle ? 'rotate(-40deg)' : 'rotate(40deg)'};
    opacity: 1;
  }
`