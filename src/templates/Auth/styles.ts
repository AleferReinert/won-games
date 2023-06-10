import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1fr;
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxlarge};
    background: url('img/auth-bg.jpg') no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    display: none;
    height: 100vh;

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

    ${LogoStyles.Wrapper} {
      margin-top: ${theme.spacings.xxlarge};
    }

    ${media.greaterThan('medium')`
        display: block;
    `}
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.base};
    display: grid;
    justify-content: space-between;
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
    margin-bottom: ${theme.spacings.small};
    align-self: end;
  `}
`

export const AuthBlock = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    display: grid;
    align-items: center;
    min-height: 100vh;

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`

export const AuthContent = styled.div`
  max-width: 38rem;
  margin: 0 auto;
  width: 100%;
`
