import React from 'react'
import { string, arrayOf } from 'prop-types'
import {
  Wrapper,
  UserPicture,
  Content,
  Username,
  Description,
  Date,
  Tag
} from './HomeCard.style'

const HomeCard = ({
  userPicture,
  username,
  description,
  postDate,
  tag
}) => (
  <Wrapper>
    <UserPicture src={userPicture} />
    <Content>
      <Username>{username}</Username>
      <Description>{description}</Description>
      {tag && tag.map(tags => <Tag color={tags.length} key={tags}>{tags}</Tag>)}
    </Content>
    <Date>{postDate}</Date>
  </Wrapper>
)

HomeCard.propTypes = {
  userPicture: string.isRequired,
  username: string.isRequired,
  description: string.isRequired,
  postDate: string.isRequired,
  tag: arrayOf(string).isRequired
}

export default HomeCard
