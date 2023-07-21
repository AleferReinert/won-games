import Link from 'next/link'
import styled, { css, DefaultTheme } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    text-align: center;
    border-bottom: 0.1rem solid ${theme.colors.primary};

    ${cssMediaQuery.greaterThan(theme.breakpoint.medium)} {
      flex-direction: column;
      text-align: left;
      align-items: normal;
      border-bottom: 0;
    }
  `}
`

const itemModifiers = {
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  `
}

type ItemProps = {
  active?: boolean
}

export const Item = styled(Link)<ItemProps>`
  ${({ theme, active }) => css`
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xsmall};
    text-decoration: none;
    transition: all ${theme.transition.default};
    flex: 1;

    &:hover {
      background-color: ${!active && theme.colors.lightGray};
    }

    svg {
      width: 2.4rem;
    }

    ${active && itemModifiers.active(theme)}

    ${cssMediaQuery.greaterThan(theme.breakpoint.medium)} {
      &:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    }
  `}
`

export const Text = styled.span`
  ${({ theme }) => css`
    display: none;

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      display: inline-flex;
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
