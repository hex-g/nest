import styled from 'styled-components'
import {
  design,
  backgroundColor,
  textColor,
  codeBackground
} from '../Layout'

export const Aside = styled.aside`
  height: 100%;
  width: ${props => (props.isOpen ? '200px' : '100px')};
  display: flex;
`

export const Menu = styled.div`
  flex-grow: 1;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${backgroundColor};
`

export const ToggleArea = styled.div`
  display: flex;
  border-right: 1px solid ${codeBackground};
`

export const ProfileContent = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  & > p {
    ${({ isOpen }) => (isOpen ? 'display: block' : 'display: none')}
  }
`

export const UserImage = styled.img`
  font-size: ${design.largeText};
  width: 60px;
  height: 60px;
  object-fit: contain;
  border: 1px solid ${design.rajah};
  background-color: ${design.rajah};
  border-radius: 50%;
  margin-left: 20px;
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
  align-items: flex-start;
`

export const Item = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${design.rajah};
  }
`

export const ItemIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ icon }) => (!icon && 'lightgreen')};
`

export const ItemTitle = styled.p`
  padding: 5px 10px;
  flex-grow: 1;
  ${({ isOpen }) => (isOpen ? 'display: inline-block' : 'display: none')};
  color: ${textColor};
`

export const LogoWrapper = styled.div``

export const ToggleButton = styled.button`
  flex-grow: 1;
  margin-right: 3px;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;

  &::before {
    content: "";
    background-color: ${design.rajah};
    width: 2px;
    height: 10px;
    position: absolute;
    opacity: 1;
    transform: rotate(0deg);
    transform-origin: 1px 7px;
    margin-top: -7.4px;
    transition: transform 200ms ease-in-out 0s, opacity 100ms ease-in-out 200ms;
  }

  &:hover::before {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(40deg)' : 'rotate(-40deg)')};
    opacity: 1;
  }

  &::after {
    content: "";
    background-color: ${design.rajah};
    width: 2px;
    height: 10px;
    position: absolute;
    opacity: 1;
    transform: rotate(0deg);
    transform-origin: 1px 3px;
    transition: transform 200ms ease-in-out 0s, opacity 100ms ease-in-out 200ms;
  }

  &:hover::after {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-40deg)' : 'rotate(40deg)')};
    opacity: 1;
  }
`
