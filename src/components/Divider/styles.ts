import styled, { css } from 'styled-components'

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;
    border: 0;
    height: 1px;
    background-color: ${theme.colors.darkGray};

    ${theme.media().greaterThan('medium')`
        margin: calc(${theme.spacings.large} * 2) 0;
    `}

    ${theme.media().greaterThan('huge')`
        margin: calc(${theme.spacings.xlarge} * 2) 0;
    `}
  `}
`
