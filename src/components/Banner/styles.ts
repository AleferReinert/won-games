import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as RibbonStyles from 'components/Ribbon/styles'
import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    ${media.lessThan('medium')`
        ${RibbonStyles.Wrapper} {
            right: 0;
        
            &::after {
                display: none;
            }
        }
    `}

    ${media.greaterThan('medium')`
        box-shadow: 0 0.4rem 0.5rem rgba(0,0,0,0.2);

        ${ButtonStyles.Wrapper} {
            ${ButtonStyles.wrapperModifiers.large(theme)}
        }
    `}
  `}
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    aspect-ratio: 16/9;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
        height: 58rem;
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.35);
    padding: ${theme.spacings.small};

    ${media.greaterThan('medium')`
    background-color: rgba(0, 0, 0, 0.7);
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
      padding: ${theme.spacings.large};
      position: absolute;
      bottom: 0;
      left: 0;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
