import styled, { css, DefaultTheme } from 'styled-components'

type breakpoint = 'huge' | 'large' | 'medium' | 'small' | 'xsmall'

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint, theme: DefaultTheme) => css`
    ${theme.media().lessThan(size)`
        display: block
    `}
  `,
  greaterThan: (size: breakpoint, theme: DefaultTheme) => css`
    ${theme.media().greaterThan(size)`
        display: block
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ theme, lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan, theme)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan, theme)}
  `}
`
