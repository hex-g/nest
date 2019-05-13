import React from 'react'
import {
  ItensList,
  Item,
} from './HorizontalNavbar.style'

const HorizontalNavbar = ({ options }) => {

  const [selectedItem, setSelectedItem] = React.useState(0)

  return (
      <ItensList>
      {options.map((option, index) => (
        <Item
          key={`nav-item-${index}`}
          activated={index === selectedItem}
          id={index}
          onClick={e => setSelectedItem(Number(e.target.id))}
        >
          {option}
        </Item>
      ))
      }
      </ItensList>
  )
}

export default HorizontalNavbar
