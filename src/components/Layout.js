import React, { Fragment } from 'react'
import theme from 'styled-theming'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { lighten } from 'polished'

export const design = {
  rajah: '#F6BD60',
  burntSienna: '#E9724C',
  wildSand: '#F5F4F4',
  hippieBlue: '#5C9EAD',
  hoverHippieBlue: lighten(0.2, '#5C9EAD'),
  capeCod: '#3E4447',
  outerSpace: '#313638',
  hoverOuterSpace: lighten(0.4, '#313638'),
  placeholderOuterSpace: lighten(0.6, '#313638'),
  cardBoxShadow: '6px 8px 20px 0 rgba(0, 0, 0, 0.08)',
  buttonBoxShadow: '0 2px 10px 2px rgba(0, 0, 0, 0.2)',
  inputBoxShadow: '0 2px 10px 2px rgba(0, 0, 0, 0.07)',
  postBoxShadow: '0 2px 5px 1px rgba(0, 0, 0, 0.5)',
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

export const backgroundColor = theme('mode', {
  light: design.wildSand,
  dark: design.outerSpace
})

export const textColor = theme('mode', {
  light: design.outerSpace,
  dark: design.wildSand
})

export const cardBackground = theme('mode', {
  light: design.wildSand,
  dark: design.capeCod
})

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Poppins:500,600,700');
  body {
    font-family: ${design.secondaryFont}, sans-serif;
    font-weight: lighter;
    color: ${textColor};
    background-color: ${backgroundColor};
  }
`

const Layout = ({ children, color }) => {
  return (
    <ThemeProvider theme={{ mode: color }}>
      <Fragment>
        <GlobalStyle />
        {children}
      </Fragment>
    </ThemeProvider>
  )
}

export default Layout