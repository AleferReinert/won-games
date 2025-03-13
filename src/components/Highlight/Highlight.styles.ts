import styled, { css } from 'styled-components'
import { HighlightProps } from './Highlight'

type WrapperProps = Pick<HighlightProps, '$background' | '$alignment'>

const wrapperModifiers = {
  right: () => css`
    flex-direction: row;

    ${Content} {
      text-align: right;
      padding-left: 0;
    }
  `,
  left: () => css`
    flex-direction: row-reverse;

    ${Content} {
      padding-right: 0;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $background, $alignment }) => css`
    position: relative;
    display: flex;
    height: 23rem;
    background: url(${$background}) no-repeat center center;
    background-size: cover;
    justify-content: space-between;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    @media (min-width: ${theme.breakpoint.small}) {
      height: 32rem;
    }

    ${wrapperModifiers[$alignment!]()}
  `}
`

export const FloatImage = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    align-self: end;
    display: flex;
    position: relative;

    img {
      min-width: 10rem;
      max-height: 23rem;
      max-width: 100%;
      height: auto !important;
      position: static !important;

      @media (min-width: ${theme.breakpoint.small}) {
        max-height: 32rem;
      }
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    align-self: start;

    @media (min-width: ${theme.breakpoint.small}) {
      padding: ${theme.spacings.large};
      align-self: end;
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    @media (min-width: ${theme.breakpoint.small}) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.xsmall};

    @media (min-width: ${theme.breakpoint.small}) {
      margin-bottom: ${theme.spacings.medium};
      font-size: ${theme.font.sizes.large};
    }
  `}
`
