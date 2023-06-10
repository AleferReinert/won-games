import styled, { css } from 'styled-components'
import * as TextFieldStyles from 'components/TextField/styles'
import { darken } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
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

export const SignLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;
    margin-top: ${theme.spacings.xsmall};

    a {
      color: ${theme.colors.secondary};
      margin-left: ${theme.spacings.xxsmall};
      transition: color, border, ${theme.transition.fast};
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      text-decoration: none;

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom-color: ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`
