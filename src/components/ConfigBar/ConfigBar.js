import React from 'react'
import { ReactComponent as ConfigIcon } from './settings.svg'
import {
  ConfigurationButton,
} from './ConfigBar.style'

const ConfigBar = ({
  isOpen,
  handleConfigurationBar,
}) => {

  return (
    <ConfigurationButton onClick={() => handleConfigurationBar()}>
      <ConfigIcon />
    </ConfigurationButton>
  )
}

export default ConfigBar