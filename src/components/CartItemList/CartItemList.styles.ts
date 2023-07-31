import styled, { css } from 'styled-components'

import { tint } from 'polished'

export const Wrapper = styled.div``

export const List = styled.ul``

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: ${tint(0.4, theme.colors.lightGray)};
    padding: ${theme.spacings.xsmall};
    display: flex;
    justify-content: space-between;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.semibold};

    @media (min-width: ${theme.breakpoint.xsmall}) {
      padding: ${theme.spacings.xsmall};
    }

    @media (min-width: ${theme.breakpoint.small}) {
      padding: ${theme.spacings.small};
    }
  `}
`

export const PriceTotal = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
