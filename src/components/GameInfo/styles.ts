import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import * as RibbonStyles from 'components/Ribbon/styles'
import * as ButtonStyles from 'components/Button/styles'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    position: relative;

    ${HeadingStyles.Wrapper} {
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.xsmall};
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

    ${media.greaterThan('medium')`

        ${HeadingStyles.Wrapper} {
            font-size: ${theme.font.sizes.xxlarge};
        }

        ${RibbonStyles.Wrapper} {
            right: ${theme.spacings.xlarge};
            padding-left: ${theme.spacings.small};
            padding-right: ${theme.spacings.small};
        }
    `}
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
        max-width: 60%;
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
        flex-direction: row;
        justify-content: end;
        column-gap: ${theme.spacings.xxsmall};

        ${ButtonStyles.Wrapper} {
            width: auto;
        }
    `}
  `}
`
