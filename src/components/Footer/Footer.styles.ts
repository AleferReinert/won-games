import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/Heading.styles'
import { cssMediaQuery } from 'utils/tests/helpers'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${cssMediaQuery.greaterThan(theme.breakpoint.xsmall)} {
      grid-template-columns: repeat(2, 1fr);
      overflow-wrap: anywhere;
    }

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      grid-template-columns: repeat(4, 1fr);
      overflow-wrap: normal;
    }
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.gray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Address = styled.address`
  font-style: normal;
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`
