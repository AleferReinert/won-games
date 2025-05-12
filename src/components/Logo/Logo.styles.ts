import styled, { css } from 'styled-components'
import { LogoProps } from './Logo'

export const Wrapper = styled.a<LogoProps>`
  ${({ width }) => css`
    display: flex;
    position: relative;
    width: ${width ? `${width}px` : 'auto'};
    height: fit-content;

    img {
      max-width: 100%;
      height: auto;
    }
  `}
`
