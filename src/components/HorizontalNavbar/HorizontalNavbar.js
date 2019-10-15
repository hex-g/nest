import React from 'react'
import { string, func } from 'prop-types'
import {
  ItensList,
  Item,
  OptionButton
} from './HorizontalNavbar.style'

const HorizontalNavbar = ({ options, listOption }) => {
  const [selectedItem, setSelectedItem] = React.useState(0)

  return (
    <ItensList>
      {options.map((option, index) => (
        <OptionButton key={option}>
          <Item
            key='nav-item'
            activated={index === selectedItem}
            id={index}
            onClick={e => { listOption(Number(e.target.id)); setSelectedItem(Number(e.target.id)) }}
          >
            {option}
          </Item>
        </OptionButton>
      ))}
    </ItensList>
  )
}

HorizontalNavbar.propTypes = {
  options: string.isRequired,
  listOption: func.isRequired
}

export default HorizontalNavbar
