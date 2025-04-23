import * as ButtonStyles from 'components/Button/Button.styles'
import * as RibbonStyles from 'components/Ribbon/Ribbon.styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    ${ButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.xsmall};
    }

    @media (max-width: calc(${theme.breakpoint.small} - 1px)) {
      ${RibbonStyles.Wrapper} {
        right: 0;

        &::after {
          display: none;
        }
      }
    }

    @media (min-width: ${theme.breakpoint.small}) {
      box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.2);

      ${ButtonStyles.Wrapper} {
        ${ButtonStyles.wrapperModifiers.large(theme)}
      }
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 23rem;
    position: relative;

    @media (min-width: ${theme.breakpoint.medium}) {
      height: 58rem;
    }
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.35);
    padding: ${theme.spacings.small};

    @media (min-width: ${theme.breakpoint.small}) {
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
      padding: ${theme.spacings.large};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    @media (min-width: ${theme.breakpoint.small}) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }

    @media (min-width: ${theme.breakpoint.small}) {
      font-size: ${theme.font.sizes.large};
    }
  `}
`
