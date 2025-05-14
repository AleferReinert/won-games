import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/Button.styles'
import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as PriceStyles from 'components/Price/Price.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    ${HeadingStyles.Wrapper} {
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.xsmall};
      line-height: 3.3rem;
    }

    ${PriceStyles.Wrapper} {
      margin-right: calc(-${theme.spacings.xsmall} - 1rem);
      float: right;
    }

    @media (min-width: ${theme.breakpoint.small}) {
      ${HeadingStyles.Wrapper} {
        font-size: ${theme.font.sizes.xxlarge};
      }

      ${PriceStyles.Wrapper} {
        ${PriceStyles.priceModifiers.large(theme)}
        margin-right: 0;
        padding: 0;
      }
    }
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};

    @media (min-width: ${theme.breakpoint.small}) {
      font-size: ${theme.font.sizes.large};
      max-width: 80rem;
    }
  `}
`

export const Header = styled.div``

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacings.xxsmall};

    @media (min-width: ${theme.breakpoint.small}) {
      flex-direction: row;
      justify-content: end;
      column-gap: ${theme.spacings.xxsmall};

      ${ButtonStyles.Wrapper} {
        min-width: auto;
      }
    }
  `}
`
