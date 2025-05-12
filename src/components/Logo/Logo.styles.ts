import styled, { css } from 'styled-components'
import { LogoProps } from './Logo'

export const wrapperModifiers = {
  small: () => css`
    width: 6rem;
    height: 1.8rem;
  `,
  medium: () => css`
    width: 11.1rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20.3rem;
    height: 6.1rem;
  `,
  $withoutText: (size?: LogoProps['size']) => css`
    width: 4.2rem;

    ${size == 'small' &&
    css`
      width: 2.3rem;
    `}
    ${size == 'large' &&
    css`
      width: 7.9rem;
    `}
  `
}

export const Wrapper = styled.a<LogoProps>`
  ${({ size, $withoutText }) => css`
    display: flex;
    overflow: hidden;

    img {
      height: inherit;
    }

    ${size && wrapperModifiers[size]()}
    ${$withoutText && wrapperModifiers.$withoutText(size)}
  `}
`
