import React from 'react'
import { ReactComponent as ConfigIcon } from './settings.svg'
import {
  Wrapper,
  ConfigurationButton,
} from './ConfigBar.style'

const ConfigBar = () => {
  const [toggle, setToggle] = React.useState(false)


  return (
    <Wrapper open={toggle}>
      <ConfigurationButton onClick={() => setToggle(!toggle)}>
        <ConfigIcon />
      </ConfigurationButton>
    </Wrapper>
  )
}

export default ConfigBar