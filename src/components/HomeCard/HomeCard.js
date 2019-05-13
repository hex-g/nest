import React from 'react'
import {
  Wrapper,
  UserPicture,
  Content,
  Username,
  Description,
  Date,
} from './HomeCard.style'

const HomeCard = ({ userPicture, username, description, postDate }) => (
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