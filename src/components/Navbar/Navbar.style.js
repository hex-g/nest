import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  width: 20%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid red;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UserPicture = styled.div`
  width: 70px;
  height: 80px;

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

  font-size: 16px;

  display: flex;
  align-items: center;
`

export const NavItemImage = styled.img`
  width: 30px;
  height: 30px;

  margin-right: 16px;

  background-image: url("https://img.fireden.net/v/image/1462/63/1462638729784.png");
  background-size: cover;
`

export const Logo = styled.img`
  margin-bottom: 21px;

  background-image: url("https://img.fireden.net/v/image/1462/63/1462638729784.png");
  background-size: cover;
`