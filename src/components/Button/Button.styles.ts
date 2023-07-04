import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from './Button'
import { lighten } from 'polished'

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
  icon: (theme: DefaultTheme) => css`
    gap: ${theme.spacings.xxsmall};

    svg {
      height: 60%;
      max-height: 1.8rem;
    }
  `,
  primary: (theme: DefaultTheme) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};

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
  `
}

export const ButtonStyle = css<ButtonProps>`
  ${({ theme, size, full, icon, variant }) => css`
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

    ${!!size && wrapperModifiers[size](theme)}
    ${!!full && wrapperModifiers.full()}
    ${!!icon && wrapperModifiers.icon(theme)}
    ${!!variant && wrapperModifiers[variant](theme)}
  `}
`
export const Wrapper = styled.button`
  ${ButtonStyle}
`

export const WrapperAsLink = styled.button`
  ${ButtonStyle}
`
