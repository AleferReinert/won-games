import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;
    border: 0;
    height: 1px;
    background-color: ${theme.colors.darkGray};

    ${cssMediaQuery.greaterThan(theme.breakpoint.medium)} {
      margin: calc(${theme.spacings.large} * 2) 0;
    }

    ${cssMediaQuery.greaterThan(theme.breakpoint.xlarge)} {
      margin: calc(${theme.spacings.xlarge} * 2) 0;
    }
  `}
`
