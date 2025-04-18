import * as BoxStyles from 'components/Box/Box.styles'
import * as HeadingStyles from 'components/Heading/Heading.styles'
import Link from 'next/link'
import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    @media (min-width: ${theme.breakpoint.medium}) {
      display: grid;
      gap: ${theme.spacings.small};
      grid-template-columns: 30rem auto;
    }

    @media (min-width: ${theme.breakpoint.large}) {
      gap: ${theme.spacings.large};
    }

    @media (min-width: ${theme.breakpoint.xlarge}) {
      gap: ${theme.spacings.xxlarge};
    }
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    text-align: center;
    border-bottom: 0.1rem solid ${theme.colors.primary};

    @media (min-width: ${theme.breakpoint.medium}) {
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
      height: 2.4rem;
      fill: ${active ? theme.colors.white : theme.colors.black};
    }

    ${active && itemModifiers.active(theme)}

    @media (min-width: ${theme.breakpoint.medium}) {
      flex: none;

      &:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    }
  `}
`

export const Text = styled.span`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoint.small}) {
      display: inline-flex;
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

export const Children = styled.div`
  ${({ theme }) => css`
    > ${BoxStyles.Wrapper} {
      &:first-child {
        display: flex;
        padding-bottom: 0;
      }
      &:last-child {
        padding-top: 0;
      }
    }

    ${HeadingStyles.Wrapper} {
      display: none;

      @media (min-width: ${theme.breakpoint.medium}) {
        display: block;
      }
    }
  `}
`
