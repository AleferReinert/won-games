import styled, { css, DefaultTheme } from 'styled-components'
import { AlertProps } from './Alert'

const alertModifiers = {
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.error.color};
    color: ${theme.colors.error.color};
    background-color: ${theme.colors.error.background};
  `,
  success: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.success.color};
    color: ${theme.colors.success.color};
    background-color: ${theme.colors.success.background};
  `,
  info: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.info.color};
    color: ${theme.colors.info.color};
    background-color: ${theme.colors.info.background};
  `,
  warning: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.warning.color};
    color: ${theme.colors.warning.color};
    background-color: ${theme.colors.warning.background};
  `
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
  `}
`

export const Alert = styled.div<AlertProps>`
  ${({ theme, $variant, $size, $hideBorderLeft }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    border-width: ${$hideBorderLeft ? 0 : '0 0 0 0.4rem'};
    border-style: solid;
    font-size: ${$size === 'small' ? theme.font.sizes.small : theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    transition: ${theme.transition.default};
    min-height: 4.3rem;

    ${$variant && alertModifiers[$variant](theme)}

    ul {
      margin-top: ${theme.spacings.xxsmall};
      padding-left: calc(${theme.spacings.xsmall} + 2px);
    }
  `}
`
