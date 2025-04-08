import styled, { css, DefaultTheme } from 'styled-components'

type AlertProps = {
  $variant?: 'error' | 'success' | 'info' | 'warning'
}

const alertModifiers = {
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.error};
    color: ${theme.colors.error};
    background-color: ${theme.colors.error}33;
  `,
  success: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.success};
    color: ${theme.colors.success};
    background-color: ${theme.colors.success}33;
  `,
  info: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.info};
    color: ${theme.colors.info};
    background-color: ${theme.colors.info}33;
  `,
  warning: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.warning};
    color: ${theme.colors.warning};
    background-color: ${theme.colors.warning}33;
  `
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
  `}
`

export const Alert = styled.div<AlertProps>`
  ${({ theme, $variant }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    border-width: 0 0 0 0.4rem;
    border-style: solid;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    transition: ${theme.transition.default};
    min-height: 4.3rem;

    ${$variant && alertModifiers[$variant](theme)}
  `}
`
