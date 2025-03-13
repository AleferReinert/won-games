import * as LogoStyles from 'components/Logo/Logo.styles'
import * as MenuMobileStyles from 'components/MenuMobile/MenuMobile.styles'
import styled, { css } from 'styled-components'
import { pxToNumber } from 'utils/tests/helpers'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    justify-content: space-between;
    position: relative;
    z-index: ${theme.layers.menu};

    ${MenuMobileStyles.MenuMobile} {
      opacity: 0;
      pointer-events: none;
      transition: opacity ${theme.transition.default};

      &[aria-hidden='false'] {
        opacity: 1;
        pointer-events: all;
      }
    }
  `}
`

export const OpenMenu = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoint.small}) {
      display: none;
    }
  `}
`

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    line-height: 0;

    svg {
      transform: translateY(2px);
    }

    @media (max-width: ${pxToNumber(theme.breakpoint.small) - 1 + 'px'}) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      ${LogoStyles.wrapperModifiers.$hideText()}
    }
  `}
`

export const MenuDesktop = styled.nav`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};

    @media (max-width: ${pxToNumber(theme.breakpoint.small) - 1 + 'px'}) {
      display: none;
    }
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    color: ${theme.colors.white};

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const NavRight = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    > * {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;

    svg {
      fill: ${theme.colors.white};
    }
  `}
`

export const ButtonSignIn = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoint.small}) {
      display: block;
    }
  `}
`
