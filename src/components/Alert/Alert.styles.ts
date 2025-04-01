import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  variant?: 'error' | 'success' | 'info' | 'warning'
}

const wrapperModifiers = {
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

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, variant }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    border-width: 0 0 0 0.4rem;
    border-style: solid;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    transition: ${theme.transition.default};
    margin: ${theme.spacings.xxsmall} 0;
    min-height: 4.3rem;

    ${variant && wrapperModifiers[variant](theme)}
  `}
`
