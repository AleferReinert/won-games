import styled, { css } from 'styled-components'
import { FormWrapperStyle, FormLinkStyle } from 'templates/Auth/Auth.styles'

export const FormWrapper = styled.div`
  ${FormWrapperStyle}
`

export const FormLink = styled.div`
  ${FormLinkStyle}
`

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
