import styled, { css } from 'styled-components'

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.black};
    text-align: right;
    margin-bottom: ${theme.spacings.medium};
    display: block;
    text-decoration: none;
  `}
`
