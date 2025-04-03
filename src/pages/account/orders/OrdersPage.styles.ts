import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.xsmall} * -1);
  `}
`
