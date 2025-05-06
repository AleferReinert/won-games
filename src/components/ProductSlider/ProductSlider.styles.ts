import styled, { css } from 'styled-components'
import { ProductSliderProps } from './ProductSlider'

type WrapperProps = Pick<ProductSliderProps, '$arrowColor'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $arrowColor }) => css`
    // To fix problem with slider on mobile
    overflow: hidden;
    max-width: ${theme.breakpoint.xxsmall};
    @media (min-width: ${theme.breakpoint.xsmall}) {
      max-width: ${theme.breakpoint.xsmall};
    }
    @media (min-width: ${theme.breakpoint.small}) {
      max-width: ${theme.breakpoint.small};
    }
    @media (min-width: ${theme.breakpoint.medium}) {
      max-width: none;
      overflow: visible;
    }

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
      display: none !important;
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      fill: ${theme.colors[$arrowColor!]};
      cursor: pointer;

      @media (min-width: ${theme.breakpoint.large}) {
        display: block !important;
      }

      &.slick-disabled {
        visibility: hidden;
      }
    }

    .slick-prev {
      left: calc(-${theme.spacings.medium} + 0.5rem);

      @media (min-width: ${theme.breakpoint.xlarge}) {
        left: -${theme.spacings.large};
      }
    }

    .slick-next {
      right: calc(-${theme.spacings.medium} + 0.5rem);

      @media (min-width: ${theme.breakpoint.xlarge}) {
        right: -${theme.spacings.large};
      }
    }

    .slick-slide > div {
      flex: 1 0 auto;
      height: 100%;
    }
  `}
`
