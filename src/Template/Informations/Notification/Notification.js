import React from 'react'
import { NEWS } from '../../../config/constants'
import { 
  Notifications,
  Notify,
  Username,
  Description,
 } from './Notification.style'

const Notification = ({ handleDarkModeChange }) => (
  <Notifications>
    {NEWS.map(info => {
      return (
        <Notify>
          <Username>{info.user}</Username> deixou um aviso:
          <Description>{info.description}</Description>
        </Notify>
      )
    })}
  </Notifications>
)

export default Notification
