import { lighten } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from './TextField'

const modifiers = {
  $iconPositionRight: () => css`
    flex-direction: row-reverse;
  `,
  disabled: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      cursor: default;

      ${Input} {
        cursor: default;
        color: ${lighten(0.15, theme.colors.gray)};

        &::placeholder {
          color: ${lighten(0.15, theme.colors.gray)};
        }
      }

      svg {
        fill: ${lighten(0.15, theme.colors.gray)};
      }
    }

    ${Label} {
      cursor: default;
      color: ${theme.colors.gray};
    }
  `,
  errorMessage: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.error};
  `
}

export const InputWrapper = styled.div<Pick<TextFieldProps, '$iconPosition' | '$errorMessage'>>`
  ${({ theme, $errorMessage, $iconPosition }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xxsmall};
    border: 0.1rem solid ${theme.colors.lightGray};
    margin-bottom: ${theme.spacings.xxsmall};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    svg {
      fill: ${theme.colors.gray};
      width: 2.4rem;
      height: 2.4rem;
    }

    ${$iconPosition === 'right' && modifiers.$iconPositionRight()}
    ${!!$errorMessage && modifiers.errorMessage(theme)}
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px ${theme.colors.lightGray} inset;
    }

    &::placeholder {
      color: ${theme.colors.gray};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.span`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.gray};
    margin: 0 ${theme.spacings.xxsmall};
  `}
`
export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Wrapper = styled.div<Pick<TextFieldProps, 'disabled'>>`
  ${({ theme, disabled }) => css`
    ${disabled && modifiers.disabled(theme)}
  `}
`
