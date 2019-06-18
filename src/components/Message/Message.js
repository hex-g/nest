import React, { Fragment } from 'react'

import { MessageWrapper, MessageBox } from './Message.style'

const Message = ({ behavior }) => {
  return (
    <Fragment>
      <MessageWrapper behavior={behavior} id="messageWrapper">
        <MessageBox behavior={behavior}>
          {behavior.message}
        </MessageBox>
      </MessageWrapper>
    </Fragment>
  )
}

export default Message