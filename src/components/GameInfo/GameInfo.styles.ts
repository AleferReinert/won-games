import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'
import * as ButtonStyles from 'components/Button/Button.styles'
import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as RibbonStyles from 'components/Ribbon/Ribbon.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    position: relative;

    ${HeadingStyles.Wrapper} {
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
    }

    ${RibbonStyles.Wrapper} {
      border-radius: ${theme.border.radius};
      font-size: ${theme.font.sizes.large};
      padding-left: ${theme.spacings.xsmall};
      padding-right: ${theme.spacings.xsmall};
      top: ${theme.spacings.medium};

      &::after {
        display: none;
      }
    }

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      ${HeadingStyles.Wrapper} {
        font-size: ${theme.font.sizes.xxlarge};
      }

      ${RibbonStyles.Wrapper} {
        right: ${theme.spacings.xlarge};
        padding-left: ${theme.spacings.small};
        padding-right: ${theme.spacings.small};
      }
    }
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      font-size: ${theme.font.sizes.large};
      max-width: 80rem;
    }
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacings.xxsmall};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      flex-direction: row;
      justify-content: end;
      column-gap: ${theme.spacings.xxsmall};

      ${ButtonStyles.Wrapper} {
        min-width: auto;
      }
    }
  `}
`
