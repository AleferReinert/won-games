import styled, { css } from 'styled-components'

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;
    border: 0;
    height: 1px;
    background-color: ${theme.colors.darkGray};

    @media (min-width: ${theme.breakpoint.medium}) {
      margin: calc(${theme.spacings.large} * 2) 0;
    }

    @media (min-width: ${theme.breakpoint.xlarge}) {
      margin: calc(${theme.spacings.xlarge} * 2) 0;
    }
  `}
`
