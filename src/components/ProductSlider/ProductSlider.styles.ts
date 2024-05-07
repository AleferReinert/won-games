import styled, { css } from 'styled-components'
import { ProductSliderProps } from './ProductSlider'

type WrapperProps = Pick<ProductSliderProps, 'arrowColor'>

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

      @media (max-width: calc(${theme.breakpoint.large} -1px)) {
        overflow: visible;
      }
    }

    .slick-arrow {
      height: 1.8rem;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      fill: ${theme.colors[arrowColor!]};
      cursor: pointer;

      &.slick-disabled {
        visibility: hidden;
      }
    }

    .slick-prev {
      left: calc(-${theme.spacings.large} - 1.5rem);

      @media (max-width: calc(${theme.breakpoint.xlarge} -1px)) {
        left: -${theme.spacings.medium};
      }
    }

    .slick-next {
      right: calc(-${theme.spacings.large} - 1.5rem);

      @media (max-width: calc(${theme.breakpoint.xlarge} -1px)) {
        right: -${theme.spacings.medium};
      }
    }

    .slick-slide > div {
      flex: 1 0 auto;
      height: 100%;
    }
  `}
`
