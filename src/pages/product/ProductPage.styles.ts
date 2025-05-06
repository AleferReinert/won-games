import { Container } from 'components/Container/Container.styles'
import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/Heading.styles'

export const Cover = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 40rem;
    position: absolute;
    top: 0;

    img {
      object-fit: cover;
    }

    &::after {
      content: '';
      display: block;
      background-color: rgba(0, 0, 0, 0.7);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    @media (min-width: ${theme.breakpoint.small}) {
      height: 58rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    }
  `}
`

export const ProductHeaderWrapper = styled(Container)`
  ${({ theme }) => css`
    margin-top: 20rem;

    @media (min-width: ${theme.breakpoint.small}) {
      margin-top: 30rem;
    }
  `}
`

export const GalleryWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.large} * 2);
    overflow: hidden;
    display: none;

    @media (min-width: ${theme.breakpoint.small}) {
      display: block;
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.large};
    color: ${theme.colors.white};

    @media (min-width: ${theme.breakpoint.small}) {
      color: ${theme.colors.black};
      background-color: ${theme.colors.white};
      margin-top: calc(${theme.spacings.large} * 2);

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.white};
      margin: ${theme.spacings.xsmall} 0;
      ${HeadingStyles.lineModifiers.left(theme, 'secondary')};

      @media (min-width: ${theme.breakpoint.small}) {
        color: ${theme.colors.black};
      }
    }

    h1 {
      font-size: ${theme.font.sizes.xxlarge};
    }
    h2 {
      font-size: ${theme.font.sizes.xlarge};
    }
    h3 {
      font-size: ${theme.font.sizes.large};
    }
    h4 {
      font-size: ${theme.font.sizes.medium};
    }
    h5 {
      font-size: ${theme.font.sizes.small};
    }
    h6 {
      font-size: ${theme.font.sizes.xsmall};
    }

    p {
      margin-bottom: ${theme.spacings.xsmall};
    }

    a {
      color: ${theme.colors.primary};
    }

    img {
      max-width: 100%;
      margin-bottom: ${theme.spacings.xsmall};
    }

    ul,
    ol {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }

    hr {
      margin: ${theme.spacings.small} 0;
      border: 0;
      height: 1px;
      background-color: ${theme.colors.darkGray};
    }

    .description__copyrights {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray};
      margin-top: ${theme.spacings.small};
    }

    @media (min-width: ${theme.breakpoint.small}) {
      font-size: ${theme.font.sizes.xlarge};

      hr {
        background-color: ${theme.colors.lightGray};
      }
    }
  `}
`

export const ProductDetailsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};

    @media (min-width: ${theme.breakpoint.small}) {
      margin-top: calc(${theme.spacings.medium} * 2);
    }
  `}
`
