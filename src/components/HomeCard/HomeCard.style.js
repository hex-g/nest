import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 110px;

  padding: 16px 16px;
  margin: 8px 0;
  margin-right: 45px;

  display: flex;
  justify-content: space-around;

  background-color: rgba(255,255,255,0.5);

  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(21,21,21,0.2);
`

export const UserPicture = styled.div`
  width: 80px;
  height: 80px;

  background-image: ${props => props.userPicture};
  background-size: cover;
`

export const Content = styled.div`
  margin-left: 30px;

  font-size: 18px;
  
  flex-grow: 1;
`

export const Username = styled.p`
  margin-bottom: 8px;
  font-weight: bold;
`

export const Description = styled.p`
`

export const Date = styled.p`
  font-size: 12px;
`