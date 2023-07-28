import styled, { css } from 'styled-components'
import { Container } from 'components/Container/Container.styles'
import { cssMediaQuery } from 'utils/tests/helpers'

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ theme, src }) => css`
    background-image: url(${src});
    background-position: top center;
    background-size: cover;
    width: 100%;
    height: 40rem;
    position: absolute;
    top: 0;

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

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      height: 58rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    }
  `}
`

export const ProductHeaderWrapper = styled(Container)`
  ${({ theme }) => css`
    margin-top: 20rem;

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      margin-top: 30rem;
    }
  `}
`

export const GalleryWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.large} * 2);
    overflow: hidden;
    display: none;

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      display: block;
    }
  `}
`

export const TextContentWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      margin-top: calc(${theme.spacings.large} * 2);
    }
  `}
`

export const ProductDetailsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      margin-top: calc(${theme.spacings.medium} * 2);
    }
  `}
`
