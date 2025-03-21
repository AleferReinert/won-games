import * as ButtonStyles from 'components/Button/Button.styles'
import styled, { css } from 'styled-components'

export const MenuMobile = styled.nav`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: ${theme.layers.menu};
  `}
`

export const CloseMenu = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    margin: ${theme.spacings.xsmall};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const MenuNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.small};
    transition: transform ${theme.transition.default};
    text-decoration: none;
  `}
`

export const AuthBox = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding-bottom: ${theme.spacings.large};

    > span {
      display: block;
      margin: ${theme.spacings.xsmall} 0 -${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const LogInNow = styled.div`
  ${ButtonStyles.Wrapper} {
    width: 100%;
    max-width: 28rem;
  }
`

export const SignUp = styled.div`
  ${ButtonStyles.Wrapper} {
    text-decoration: underline;
  }
`
