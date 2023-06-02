import styled, { css } from 'styled-components'
import { HighlightProps } from '.'
import media from 'styled-media-query'

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>

const wrapperModifiers = {
  left: () =>
    css`
      grid-template-areas: 'content floatImage';

      ${Content} {
        text-align: left;
        padding-right: 0;
      }

      ${FloatImage} {
        justify-self: end;
      }
    `,
  right: () =>
    css`
      grid-template-areas: 'floatImage content';

      ${Content} {
        text-align: right;
        padding-left: 0;
      }
    `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    height: 23rem;
    display: grid;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
        height: 32rem;
    `}

    ${wrapperModifiers[alignment!]()}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    align-self: end;
    grid-area: floatImage;

    ${media.greaterThan('medium')`
        max-height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    grid-area: content;

    ${media.greaterThan('medium')`
        padding: ${theme.spacings.large};
        align-self: end;
    `}
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.large};
    `}
  `}
`
