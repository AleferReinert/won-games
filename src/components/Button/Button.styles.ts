import { lighten } from 'polished'
import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from './Button'

export const wrapperModifiers = {
  xsmall: () => css`
    height: 2.2rem;
  `,
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: 0 ${theme.spacings.large};
  `,
  full: () => css`
    min-width: 100%;
  `,
  primary: (theme: DefaultTheme) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};

    svg {
      fill: ${theme.colors.white};
    }

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }
  `,
  link: (theme: DefaultTheme) => css`
    background: transparent;
    color: ${theme.colors.primary};
    transition: color ${theme.transition.fast};

    &:hover {
      color: ${lighten(0.1, theme.colors.primary)};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    &:disabled {
      background: ${theme.colors.gray};
      cursor: not-allowed;
      color: ${theme.colors.white};
    }
  `
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, size, $full, $variant, disabled }) => css`
    cursor: pointer;
    border: 0;
    border-radius: ${theme.border.radius};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.semibold};
    padding: 0 ${theme.spacings.xxsmall};
    gap: ${theme.spacings.xxsmall};
    white-space: nowrap;

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${$full && wrapperModifiers.full()}
    ${!!$variant && wrapperModifiers[$variant](theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
