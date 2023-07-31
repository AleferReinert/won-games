import styled, { css } from 'styled-components'

import { darken } from 'polished'
import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as TextFieldStyles from 'components/TextField/TextField.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoint.medium}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    background: url('img/auth-bg.jpg') no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    display: none;
    height: 100%;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${theme.colors.black};
      opacity: 0.85;
    }

    ${HeadingStyles.Wrapper} {
      line-height: 1.1;
      margin-bottom: ${theme.spacings.xsmall};
    }

    @media (min-width: ${theme.breakpoint.medium}) {
      display: block;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.base};
    display: grid;
    justify-content: space-between;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.small};
    height: 100%;

    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xlarge};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const BannerFooter = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    align-self: end;
    margin-top: ${theme.spacings.small};
  `}
`

export const AuthBlock = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    display: grid;
    align-items: center;
    min-height: 100vh;

    ${HeadingStyles.Wrapper} {
      margin: ${theme.spacings.xxlarge} 0 ${theme.spacings.medium};
    }
  `}
`

export const AuthContent = styled.div`
  max-width: 38rem;
  margin: 0 auto;
  width: 100%;

  > a:first-child {
    width: fit-content;
    display: block;
    margin: 0 auto;
  }
`

export const FormWrapperStyle = css`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const FormLinkStyle = css`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;
    margin-top: ${theme.spacings.xsmall};

    a {
      color: ${theme.colors.secondary};
      margin-left: ${theme.spacings.xxsmall};
      transition: color, border, ${theme.transition.fast};
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      text-decoration: none;

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom-color: ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`
