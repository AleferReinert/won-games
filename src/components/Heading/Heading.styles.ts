import styled, { DefaultTheme, css } from 'styled-components'
import { HeadingProps, LineColors } from './Heading'
import { cssMediaQuery } from 'utils/tests/helpers'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
      border-bottom-width: 0.4rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  left: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,
  bottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, line, lineColor, size }) => css`
    color: ${theme.colors[color!]};

    ${line && wrapperModifiers[line](theme, lineColor!)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
