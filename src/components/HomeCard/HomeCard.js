import React from 'react'
import {
  Wrapper,
  UserPicture,
  Content,
  Username,
  Description,
  Date,
  Tag
} from './HomeCard.style'

const HomeCard = ({ userPicture, username, description, postDate, tag, index }) => (
  <Wrapper>
    <UserPicture src={userPicture} />
    <Content>
      <Username>{username}</Username>
      <Description>{description}</Description>
      {tag && tag.map((tags) =>
        <Tag color={tags.length}>{tags}</Tag>
      )}
    </Content>
    <Date>{postDate}</Date>
  </Wrapper>
)

export default HomeCard