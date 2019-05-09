import React from 'react'
import {
  ItensList,
  Item,
} from './HorizontalNavbar.style'

const HorizontalNavbar = ({ items = ['[ITEM]', '[MATHEUS]', '[AVISOS]', '[ITEM]', '[MATHEUS]', '[ITEM]', '[MATHEUS]', '[ITEM]', '[MATHEUS]','[ITEM]', '[MATHEUS]','[ITEM]', '[MATHEUS]','[ITEM]', '[MATHEUS]','[ITEM]', '[MATHEUS]','[ITEM]', '[MATHEUS]','[ITEM]', '[MATHEUS]','[ITEM]', '[MATHEUS]','[ITEM]', '[MATHEUS]'] }) => {

  const [selectedItem, setSelectedItem] = React.useState(0)

  return (
      <ItensList>
      {items.map((item, index) => (
        <Item
          key={`nav-item-${index}`}
          activated={index === selectedItem}
          id={index}
          onClick={e => setSelectedItem(Number(e.target.id))}
        >
          {item}
        </Item>
      ))
      }
      </ItensList>
  )
}

export default HorizontalNavbar
