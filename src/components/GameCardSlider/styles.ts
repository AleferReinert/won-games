import styled, { css } from 'styled-components'
import { GameCardSliderProps } from '.'

type WrapperProps = Pick<GameCardSliderProps, 'arrowColor'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, arrowColor }) => css`
    div.slick-track {
      display: flex;
    }

    div.slick-list {
      margin: 0 -${theme.spacings.xxsmall};
      display: flex;
      overflow: visible;

      ${theme.media().greaterThan('huge')`
        overflow: hidden;
      `}
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
