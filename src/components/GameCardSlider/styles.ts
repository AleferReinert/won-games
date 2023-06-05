import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { GameCardSliderProps } from '.'

type WrapperProps = Pick<GameCardSliderProps, 'arrowColor'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, arrowColor }) => css`
    ${media.lessThan('huge')`
        overflow: hidden;
    `}

    .slick-track {
      display: flex;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
      display: flex;
    }

    .slick-arrow {
      height: 1.8rem;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      color: ${theme.colors[arrowColor!]};
      cursor: pointer;

      &.slick-disabled {
        visibility: hidden;
      }
    }

    .slick-prev {
      left: calc(-${theme.spacings.large} - 1.5rem);
    }

    .slick-next {
      right: calc(-${theme.spacings.large} - 1.5rem);
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }
  `}
`
