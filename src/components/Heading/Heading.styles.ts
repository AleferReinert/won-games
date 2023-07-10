import styled, { DefaultTheme, css } from 'styled-components'
import { HeadingProps, LineColors } from './Heading'
import { cssMediaQuery } from 'utils/tests/helpers'

export const sizeModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

export const lineModifiers = {
  small: () => css`
    &::after {
      width: 2.5rem;
      border-bottom-width: 0.3rem;
      bottom: -0.4rem;
    }
  `,
  medium: () => css`
    &::after {
      width: 4rem;
      border-bottom-width: 0.4rem;
      bottom: -0.4rem;
    }
  `,
  large: () => css`
    &::after {
      width: 5rem;
      border-bottom-width: 0.5rem;
      bottom: -0.8rem;
    }
  `,
  left: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: 1.2rem;
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,
  bottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      /* bottom: 0.6rem; */
      border-bottom-style: solid;
      border-bottom-color: ${theme.colors[lineColor]};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, line, lineColor, lineBottomSize, size }) => css`
    color: ${theme.colors[color!]};

    ${line && lineModifiers[line](theme, lineColor!)}
    ${lineBottomSize && lineModifiers[lineBottomSize]()}
    ${!!size && sizeModifiers[size](theme)}
  `}
`
