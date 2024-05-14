import styled, { DefaultTheme, css } from 'styled-components'
import { RibbonProps } from './Ribbon'

const WrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonProps['color']) => css`
    background-color: ${theme.colors[color ?? 'primary']};

    &::after {
      border-color: ${theme.colors[color ?? 'primary']} transparent transparent
        ${theme.colors[color ?? 'primary']};
      filter: brightness(75%);
    }
  `,
  small: (theme: DefaultTheme) => css`
    height: 2.4rem;
    font-size: ${theme.font.sizes.xxsmall};
    line-height: 2.4rem;
    padding: 0 2.8rem;
    top: 1.3rem;
    right: -1.2rem;

    &::after {
      bottom: -0.6rem;
      border-width: 0.3rem 0.6rem;
    }
  `,
  large: (theme: DefaultTheme) => css`
    height: 3.3rem;
    font-size: ${theme.font.sizes.small};
    line-height: 3.3rem;
    padding: 0 4rem;
    top: 5rem;
    right: -1.4rem;

    &::after {
      bottom: -0.7rem;
      border-width: 0.4rem 0.7rem;
    }
  `
}

export const Wrapper = styled.div<Pick<RibbonProps, 'color' | 'size'>>`
  ${({ theme, color, size }) => css`
    display: inline-block;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    position: absolute;

    &::after {
      content: '';
      height: 0;
      display: block;
      position: absolute;
      right: 0;
      border-style: solid;
    }

    ${size && WrapperModifiers[size](theme)}
    ${color && WrapperModifiers.color(theme, color)}
  `}
`
