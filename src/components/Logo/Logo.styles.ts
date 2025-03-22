import styled, { css } from 'styled-components'
import { LogoProps } from './Logo'

export const wrapperModifiers = {
  small: () => css`
    width: 5.8rem;
    height: 1.8rem;
  `,
  medium: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 6.1rem;
  `,
  $withoutText: (size?: LogoProps['size']) => css`
    width: 4.2rem;
    ${size == 'small' &&
    css`
      width: 2.2rem;
    `}
    ${size == 'large' &&
    css`
      width: 7.6rem;
    `}
    overflow: hidden;

    .text {
      display: none;
    }
  `
}

export const Wrapper = styled.a<LogoProps>`
  ${({ theme, color, size, $withoutText }) => css`
    svg {
      color: ${theme.colors[color!]};
      height: inherit;
    }

    ${size && wrapperModifiers[size]()}
    ${$withoutText && wrapperModifiers.$withoutText(size)}
  `}
`
