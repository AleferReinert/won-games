import { Container } from 'components/Container'
import styled, { css } from 'styled-components'

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

    ${theme.media().greaterThan('small')`
        height: 58rem;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    `}
  `}
`

export const GameInfoWrapper = styled(Container)`
  ${({ theme }) => css`
    margin-top: 20rem;

    ${theme.media().greaterThan('small')`
        margin-top: 30rem;
    `}
  `}
`

export const GalleryWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.large} * 2);
    overflow: hidden;
    display: none;

    ${theme.media().greaterThan('small')`
        display: block;
    `}
  `}
`

export const TextContentWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};

    ${theme.media().greaterThan('small')`
        margin-top: calc(${theme.spacings.large} * 2);
    `}
  `}
`

export const GameDetailsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.xxlarge};

    ${theme.media().greaterThan('small')`
        margin-top: calc(${theme.spacings.large} * 2);
        padding-bottom: calc(${theme.spacings.large} * 2);
        border-bottom: 1px solid ${theme.colors.gray};
        margin-bottom: calc(${theme.spacings.large} * 2);
    `}
  `}
`
