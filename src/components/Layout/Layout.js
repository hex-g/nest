import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { lighten } from 'polished'

export const theme = {
  rajah: '#F6BD60',
  burntSienna: '#E9724C',
  wildSand: '#F5F4F4',
  hippieBlue: '#5C9EAD',
  hoverHippieBlue: lighten(0.2, '#5C9EAD'),
  outerSpace: '#313638',
  hoverOuterSpace: lighten(0.4, '#313638'),
  placeholderOuterSpace: lighten(0.6, '#313638'),
  cardBoxShadow: '6px 8px 20px 0 rgba(0, 0, 0, 0.08)',
  buttonBoxShadow: '0 2px 10px 2px rgba(0, 0, 0, 0.2)',
  inputBoxShadow: '0 2px 10px 2px rgba(0, 0, 0, 0.07)',
  primaryFont: 'Poppins',
  secondaryFont: 'Lato',
  hugeTitle: '64px',
  largeTitle: '48px',
  mediumTitle: '40px',
  smallTitle: '32px',
  hugeText: '24px',
  largeText: '18px',
  mediumText: '16px',
  smallText: '12px'
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Poppins:500,600,700');
  body {
    font-family: ${props => props.theme.secondaryFont}, sans-serif;
    font-weight: lighter;
    color: ${props => props.theme.outerSpace};
    background-color: ${props => props.theme.wildSand};
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
          {children}
      </Fragment>
    </ThemeProvider>
  )
}

export default Layout;