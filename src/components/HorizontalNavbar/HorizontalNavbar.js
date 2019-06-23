import React from 'react'
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
        <OptionButton key={index}>
          <Item
            key={`nav-item-${index}`}
            activated={index === selectedItem}
            id={index}
            onClick={e => {listOption(Number(e.target.id)); setSelectedItem(Number(e.target.id))}}
          >
            {option}
          </Item>
        </OptionButton>
      ))
      }
      </ItensList>
  )
}

export default HorizontalNavbar
