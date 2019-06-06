import React, { useState } from 'react'
import {
  AdminWrapper,
  AdminTitle,
  AdminInput
} from './Admin.style'

const Admin = () => {
  const [text, setText] = useState('default')

  return (
    <AdminWrapper>
      <AdminTitle>Admin</AdminTitle>
      <label for="admin-combo">{text}</label>
      <AdminInput id="admin-combo" type="select" onKeyUp={() => (setText('fff'))} />
    </AdminWrapper>
  )
}

export default Admin
