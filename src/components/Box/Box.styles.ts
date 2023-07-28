import styled, { css } from 'styled-components'
import { BoxProps } from './Box'
import { DefaultTheme } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'

const wrapperModifiers = {
  xsmall: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xsmall};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      padding: ${theme.spacings.small};
    }
  `,
  medium: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.small};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      padding: ${theme.spacings.medium};
    }
  `
}

export const Wrapper = styled.div<BoxProps>`
  ${({ theme, padding }) => css`
    background-color: ${theme.colors.white};

    ${wrapperModifiers[padding!](theme)}
  `}
`
