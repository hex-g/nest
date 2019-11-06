import React from 'react'
import { element } from 'prop-types'
import Card from './SquareCard.style'

const SquareCard = ({ children }) => (<Card>{children}</Card>)

SquareCard.propTypes = {
  children: element.isRequired
}

export default SquareCard
