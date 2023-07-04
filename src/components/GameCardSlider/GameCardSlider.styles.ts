import styled, { css } from 'styled-components'
import { GameCardSliderProps } from './GameCardSlider'
import { cssMediaQuery } from 'utils/tests/helpers'

type WrapperProps = Pick<GameCardSliderProps, 'arrowColor'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, arrowColor }) => css`
    div.slick-track {
      display: flex;
      gap: ${theme.spacings.xxsmall};
    }

    div.slick-list {
      margin: 0 -${theme.spacings.xxsmall};
      display: flex;
      overflow: hidden;

      ${cssMediaQuery.lessThan(theme.breakpoint.large)} {
        overflow: visible;
      }
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

      ${cssMediaQuery.lessThan(theme.breakpoint.xlarge)} {
        left: -${theme.spacings.medium};
      }
    }

    .slick-next {
      right: calc(-${theme.spacings.large} - 1.5rem);

      ${cssMediaQuery.lessThan(theme.breakpoint.xlarge)} {
        right: -${theme.spacings.medium};
      }
    }

    .slick-slide > div {
      flex: 1 0 auto;
      height: 100%;
    }
  `}
`
