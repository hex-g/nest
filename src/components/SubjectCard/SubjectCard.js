import React, { useState } from 'react'
import { string, bool } from 'prop-types'
import {
  Wrapper,
  Image,
  Content,
  TaskName,
  Description,
  FileName,
  RightContent,
  Date,
  CheckBox
} from './SubjectCard.style'

import { ReactComponent as Download } from '../../assets/downloadIcon.svg'
import { ReactComponent as Upload } from '../../assets/uploadIcon.svg'
import { ReactComponent as File } from '../../assets/fileIcon.svg'

export const TASK_TYPES = [
  { type: 'download', icon: <Download /> },
  { type: 'upload', icon: <Upload /> },
  { type: 'file', icon: <File /> }
]


const findIcon = type => {
  const target = TASK_TYPES.filter(name => name.type === type)
  return target[0].icon
}

const SubjectCard = ({
  type,
  taskName,
  description,
  fileName,
  postDate,
  checked
}) => {
  const [isChecked, setCheck] = useState(checked)

  const handleCheck = () => {
    setCheck(!isChecked)
  }

  return (
    <Wrapper>
      <Image>
        {findIcon(type)}
      </Image>
      <Content>
        <TaskName>{taskName}</TaskName>
        <Description>{description}</Description>
        {!!fileName && <FileName>Nome do arquivo:<span>{fileName}</span></FileName>}
      </Content>
      <RightContent>
        <Date>{postDate}</Date>
        <CheckBox type='checkbox' checked={isChecked} onChange={() => handleCheck()} />
      </RightContent>
    </Wrapper>
  )
}

SubjectCard.propTypes = {
  type: string.isRequired,
  taskName: string.isRequired,
  description: string.isRequired,
  fileName: string.isRequired,
  postDate: string.isRequired,
  checked: bool.isRequired
}

export default SubjectCard
