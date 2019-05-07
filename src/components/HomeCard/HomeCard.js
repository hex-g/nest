import React from 'react'
import {
  Wrapper,
  UserPicture,
  Content,
  Username,
  Description,
  Date,
} from './HomeCard.style'

const img = 'url("https://img.fireden.net/v/image/1462/63/1462638729784.png")'

const HomeCard = ({ userPicture = img, username = '[USERNAME]', description = '[DESCRIPTION]', postDate = '00, Dom, 0000' }) => (
  <Wrapper>
    <UserPicture userPicture={userPicture} />
    <Content>
      <Username>{username}</Username>
      <Description>{description}</Description>
    </Content>
    <Date>{postDate}</Date>
  </Wrapper>
)

export default HomeCard