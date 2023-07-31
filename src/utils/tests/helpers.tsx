import { ThemeProvider } from 'styled-components'
import { RenderResult, render } from '@testing-library/react'
import theme from 'styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

// Convert a string with 'px' to number
export const pxToNumber = (themeBreakpoint: string) => {
  return Number(themeBreakpoint.replace('px', ''))
}

/* Return a function in
 */
export const jsMediaQuery = {
  lessThan: (breakpoint: string, myFunction: () => void) => {
    if (innerWidth < pxToNumber(breakpoint)) {
      myFunction()
    }
  },
  greaterThan: (breakpoint: string, myFunction: () => void) => {
    if (innerWidth >= pxToNumber(breakpoint)) {
      myFunction()
    }
  }
}

export const hexToRGBA = (hexCode: string) => {
  let hex = hexCode.replace('#', '')

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return `rgb(${r}, ${g}, ${b})`
}
